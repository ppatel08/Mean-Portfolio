import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from 'src/app/api/services/experience.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-experience-save',
  templateUrl: './experience-save.component.html',
  styleUrls: ['./experience-save.component.css']
})
export class ExperiencesSaveComponent implements OnInit {

  _id: any;
  submitted = false;

  experienceForm: FormGroup;
  experience: any

  projectsForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.experienceForm = formBuilder.group({
      designation: ['', [Validators.required]],
      startedYear: ['', [Validators.required]],
      endedYear: ['', [Validators.required]],
      startedMonth: ['', [Validators.required]],
      endedMonth: ['', [Validators.required]],
      description: ['', [Validators.required]],
      companyname: ['', [Validators.required]],
      projects: this.formBuilder.array([]),
    });
  }

  get controls() { return this.experienceForm.controls; }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params._id != '0') {
        this._id = params._id;
        this.getExperience(this._id);
      }
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      title: '',
      description: '',
    });
  }

  addItem() {
    this.projects().push(this.createItem());
  }

  projects(): FormArray {
    return this.experienceForm.get('projects') as FormArray;
  }

  deleteProject(index: number) {
    this.projects().removeAt(index);
  }

  getExperience(_id: any) {
    this.experienceService.getExperience(_id).subscribe(data => {
      this.experience = data.result;
      this.experience.projects.forEach(() => {
        this.addItem();
      });
      this.experienceForm.patchValue(this.experience);
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.experienceForm.invalid) {
      return;
    }
    const formData = this.experienceForm.value;
    console.log('formdata',formData);
    if (this._id && this._id.length > 0) {
      this.experienceService.update(this._id, formData).subscribe(res => {
        this.notificationService.success('Updated Succesfully');
        this.back();
      });
    } else {
      this.experienceService.insert(formData).subscribe(() => {
        this.notificationService.success('Inserted Succesfully');
        this.back();
      });
    }
  }

  back() {
    this.router.navigate(['portfolio/experiences']);
  }

}
