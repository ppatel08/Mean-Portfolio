import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/api/services/services.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-services-save',
  templateUrl: './services-save.component.html',
  styleUrls: ['./services-save.component.css']
})
export class ServicesSaveComponent implements OnInit {

  serviceForm: FormGroup
  submitted = false;
  _id: string = '';

  service: any;

  uploadfile: any

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private servicesService: ServicesService,
    private notificationService: NotificationService,
    private router: Router
  ) {

    this.serviceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      imageUrl: ['', []],
      description: ['', [Validators.required]],
      percentage: ['', []],
      color: ['', []],
    });
  }

  get controls() { return this.serviceForm.controls; }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params._id != '0') {
        this._id = params._id;
        this.getService(this._id);
      }
    });
  }

  getService(_id: any) {
    this.servicesService.getService(_id).subscribe(data => {
      this.service = data.result;
      this.serviceForm.patchValue(this.service);
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.serviceForm.invalid) {
      return;
    }

    const formData = this.serviceForm.value;
    var data = new FormData();
    data.append('data', JSON.stringify(formData));

    if (this.uploadfile) {
      for (const file of this.uploadfile) {
        data.append('files', file, file.name);
      }
    }

    if (this._id && this._id.length > 0) {
      this.servicesService.update(this._id, data).subscribe(res => {
        this.notificationService.success('Updated Successfully');
        this.back();
      });
    } else {
      this.servicesService.insert(data).subscribe(res => {
        this.notificationService.success('Inserted Successfully');
        this.back();
      });
    }
  }

  handleServiceImageInput(files: any) {
    this.uploadfile = files.files;
  }

  back() {
    this.router.navigate(['portfolio/services']);
  }
}
