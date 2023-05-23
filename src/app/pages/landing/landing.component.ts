import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/api/services/contactus.service';
import { ExperienceService } from 'src/app/api/services/experience.service';
import { ServicesService } from 'src/app/api/services/services.service';
import { SkillsetService } from 'src/app/api/services/skillset.service';
import { UserService } from 'src/app/api/services/user.service';
import { NotificationService } from 'src/app/service/notification.service';
import { SharedService } from 'src/app/service/shared.service';


declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted = false;
  user: any = [];
  experiences: any = [];
  skills: any = [];
  services: any = [];
  serviceTypes: string[] = [];
  selectedPortfolio = '';

  constructor(public formBuilder: FormBuilder,
    private contactUsService: ContactusService,
    private notificationService: NotificationService,
    private experiencesService: ExperienceService,
    private userService: UserService,
    private skillsetService: SkillsetService,
    private servicesService: ServicesService,
    public root: SharedService,
    private router: Router) {

    this.contactUsForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  get controls() { return this.contactUsForm.controls; }

  ngOnInit(): void {
    this.getUsers();
    this.getExperiences();
    this.getSkillsets();
    this.getServices();
  }


  submitContactUs() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    let formData = this.contactUsForm.value;
    this.contactUsService.insert(formData).subscribe(res => {
      this.notificationService.success("Succefully sent");
      this.contactUsForm.reset({});
      this.router.navigate(['/']);
      this.submitted = false;
    });
  }

  getUsers() {
    this.userService.getUser().subscribe(data => {
      if (data.result) {
        this.user = data.result;
      }
    });
  }

  getExperiences() {
    this.experiencesService.getExperiences().subscribe(data => {
      if (data.result) {
        this.experiences = data.result;
      }
    });
  }

  getSkillsets() {
    this.skillsetService.getSkillsets().subscribe(data => {
      if (data.result) {
        this.skills = data.result;
      }
    });
  }

  getServices() {
    this.servicesService.getServices().subscribe(data => {
      if (data.result) {
        this.services = data.result;
        this.serviceTypes = this.services.map((e: any) => e.type).filter((e: any, i: number, a: any[]) => e && a.indexOf(e) === i);
      }
    });
  }

  getFilteredServices() {
    if (this.selectedPortfolio) {
      return this.services.filter((e: any) => e.type === this.selectedPortfolio);
    } else {
      return this.services;
    }
  }
}
