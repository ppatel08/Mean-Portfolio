import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { SkillsetSaveComponent } from './skillset-save/skillset-save.component';
import { skillsetsRoutingModule } from './skillset-routing.module';


@NgModule({
  declarations: [
    SkillsetsComponent,
    SkillsetSaveComponent,
  ],
  imports: [
    CommonModule,
    skillsetsRoutingModule,
    SharedModule
  ]
})
export class SkillsetsModule { }
