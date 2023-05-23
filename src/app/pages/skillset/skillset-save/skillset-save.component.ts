import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsetService } from 'src/app/api/services/skillset.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-skillset-save',
  templateUrl: './skillset-save.component.html',
  styleUrls: ['./skillset-save.component.css']
})
export class SkillsetSaveComponent implements OnInit {

  _id: any;
  submitted = false;

  skillsetForm: FormGroup;
  skill: any

  uploadfile: any
  
  constructor(
    public formBuilder: FormBuilder,
    private skillsetService: SkillsetService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.skillsetForm = formBuilder.group({
      name:     ['', [Validators.required]],
      imageUrl: ['', []],
    });
  }

  get controls() { return this.skillsetForm.controls; }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params._id != '0'){
        this._id = params._id;
        this.getSkillset(this._id);
      }
    });
  }

  getSkillset(_id: any) {
    this.skillsetService.getSkillset(_id).subscribe(data => {
      this.skill = data.result;
      this.skillsetForm.patchValue(this.skill);
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.skillsetForm.invalid) {
      return;
    }
    
    const formData = this.skillsetForm.value;
    var data = new FormData();
    data.append('data', JSON.stringify(formData));

    if(this.uploadfile) {
      for (const file of this.uploadfile) {
        data.append("files", file, file.name);
      }
    }

    if (this._id && this._id.length > 0) {
      this.skillsetService.update(this._id, data).subscribe(res => {
        this.notificationService.success('Updated Succesfully');
        this.back();
      });
    } else {
      this.skillsetService.insert(data).subscribe(res => {
        this.notificationService.success('Inserted Succesfully');
        this.back();
      });
    }
  }

  handleSkillImageInput(files: any) {
    this.uploadfile = files.files;
  }

  back() {
    this.router.navigate(['portfolio/skillsets']);
  }
}
