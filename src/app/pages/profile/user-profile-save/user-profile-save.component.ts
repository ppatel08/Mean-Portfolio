import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/services/user.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-user-profile-save',
  templateUrl: './user-profile-save.component.html',
  styleUrls: ['./user-profile-save.component.css']
})
export class UserProfileSaveComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  _id: string = '';

  user: any;

  uploadProfile: any
  uploadCv: any

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      linkedInUrl: ['', []],
      githubUrl: ['', []],
      stackOverflowUrl: ['', []],
      content: ['', [Validators.required]],
      aboutMe: ['', [Validators.required]],
      winningAwards: ['', []],
      completedProjects: ['', [Validators.required]],
      totalYearsOfExperience: ['', [Validators.required]],
      companiesWorked: ['', [Validators.required]],
    });
  }

  get controls() { return this.userForm.controls; }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params._id != '0') {
        this._id = params._id;
        this.getUser();
      }
    });
  }

  getUser() {
    this.userService.getUser().subscribe(data => {
      this.user = data.result;
      this.userForm.patchValue(this.user);
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const formData = this.userForm.value;
    this.userService.save(formData).subscribe(res => {
      this.notificationService.success('Saved Successfully');
      this.back();
    });
  }

  back() {
    this.router.navigate(['portfolio/user']);
  }
}

