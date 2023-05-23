import { Component, OnInit } from '@angular/core';
import { UserService } from './api/services/user.service';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-admin-portal';
  constructor(private userService: UserService, private sharedService: SharedService) {
    if (localStorage.getItem('access_token')) {
      // this.userService.getUserProfile().subscribe(res => {
      //   this.sharedService.setLoggedInUserData(res.result);
      // });
    }
  }

  ngOnInit() {
  }
}
