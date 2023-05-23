import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/api/services/experience.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: any = [];

  constructor(
    private experiencesService: ExperienceService,
    private matDialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.experiencesService.getExperiences().subscribe(data => {
      if (data.result) {
        this.experiences = data.result;
      }
    });
  }

  edit(_id: any) {
    this.router.navigate([`portfolio/experiences/${_id}`]);
  }

  delete(_id: any) {
    this.matDialog.open(ConfirmationComponent, {
      data: { title: 'Delete Experience', message: 'Do you really want to delete this experience ?' }
    }).afterClosed().subscribe((result) => {
      if (result === true) {
        this.experiencesService.delete(_id).subscribe(res => {
          this.notificationService.success('Experience has been deleted successfully');
          this.getExperiences();
        });
      }
    });
  }
}
