import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { experiencesRoutingModule } from './experience-routing.module';
import { ExperiencesSaveComponent } from './experience-save/experience-save.component';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperiencesSaveComponent,
  ],
  imports: [
    CommonModule,
    experiencesRoutingModule,
    SharedModule
  ]
})
export class ExperiencesModule { }
