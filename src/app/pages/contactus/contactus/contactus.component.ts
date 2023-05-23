import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/api/services/contactus.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  _id: any = '';
  contacts: any = [];

  constructor(
    private contactusService: ContactusService,
    private matDialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getContactus();
  }

  getContactus() {
    this.contactusService.getContacts().subscribe(data => {
      if (data.result) {
        this.contacts = data.result;
      }
    });
  }

  edit(_id: any) {
    this.router.navigate([`portfolio/contactus/${_id}`]);
  }

  delete(_id: any) {
    this.matDialog.open(ConfirmationComponent, {
      data: { title: 'Delete Contact Details', message: 'Do you really want to delete this contact ?' }
    }).afterClosed().subscribe((result) => {
      if (result === true) {
        this.contactusService.delete(_id).subscribe(() => {
          this.notificationService.success('Contactus Details has been deleted successfully');
          this.getContactus();
        });
      }
    });
  }
}
