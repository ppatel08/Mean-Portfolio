import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/services/user.service';
import { NotificationService } from 'src/app/service/notification.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  _id: string = '';
  user: any = [];
  showImage = true;
  constructor(
    public root: SharedService,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) { }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe(data => {
      if (data.result) {
        this.user = data.result;
      }
    });
  }

  edit(_id: string) {
    this.router.navigate([`portfolio/user/${_id}`]);
  }

  uploadProfileImage(files: any) {
    var data = new FormData();
    if(files.files) {
      for (const file of files.files) {
        data.append("files", file, file.name);
      }
    }
    this.userService.uploadProfileImage(data).subscribe(data => {
      this.notificationService.success('Profile image uploaded successfully');
      delete this.user.profileImage;
      this.getUsers();   
      setTimeout(() => {
        this.user.profileImage = this.user.profileImage + '&time=' + new Date().getTime();
      }, 500)
    });
  }

  uploadCV(files: any) {
    var data = new FormData();
    if(files.files) {
      for (const file of files.files) {
        data.append("files", file, file.name);
      }
    }
    this.userService.uploadCv(data).subscribe(data => {
      this.notificationService.success('CV uploaded successfully');
      this.getUsers();   
    });
  }
}
