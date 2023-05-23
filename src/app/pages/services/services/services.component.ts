import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/api/services/services.service';
import { NotificationService } from 'src/app/service/notification.service';
import { SharedService } from 'src/app/service/shared.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  _id: string = '';
  services: any = [];

  constructor(
    private servicesService: ServicesService,
    private matDialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
    public root: SharedService
  ) { }

  ngOnInit(): void {
    this.getServices();
  }


  getServices() {
    this.servicesService.getServices().subscribe(data => {
      if (data.result) {
        this.services = data.result;
      }
    });
  }

  edit(_id: any) {
    this.router.navigate([`portfolio/services/${_id}`]);
  }

  deleteServices(_id: any) {
    console.log("id", _id);
    this.matDialog.open(ConfirmationComponent, {
      data: { title: 'Delete Service', message: 'Do you really want to delete this service ?' }
    }).afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('after closed', _id);
        
        this.servicesService.delete(_id).subscribe(res => {
          this.notificationService.success('Service has been deleted successfully');
          this.getServices();
        });
      }
    });
  }
}
