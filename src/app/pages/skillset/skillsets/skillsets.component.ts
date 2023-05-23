import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SkillsetService } from 'src/app/api/services/skillset.service';
import { NotificationService } from 'src/app/service/notification.service';
import { SharedService } from 'src/app/service/shared.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css']
})
export class SkillsetsComponent implements OnInit {

  _id: any;
  skills: any = []

  constructor(
    private skillsetService: SkillsetService,
    private matDialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
    public root: SharedService
  ) { }

  ngOnInit(): void {
    this.getSkillsets();
  }

  getSkillsets() {
    this.skillsetService.getSkillsets().subscribe(data => {
      if (data.result) {
        this.skills = data.result;
      }
    });
  }

  edit(_id: any) {
    this.router.navigate([`portfolio/skillsets/${_id}`]);
  }

  delete(_id: any) {
    this.matDialog.open(ConfirmationComponent, {
      data: { title: 'Delete Skillset', message: 'Do you really want to delete this skill ?' }
    }).afterClosed().subscribe((result) => {
      if (result === true) {
        this.skillsetService.delete(_id).subscribe(res => {
          this.notificationService.success('Skillset has been deleted successfully');
          this.getSkillsets();
        });
      }
    });
  }
}
