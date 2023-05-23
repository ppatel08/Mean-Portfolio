import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsetSaveComponent } from './skillset-save/skillset-save.component';
import { SkillsetsComponent } from './skillsets/skillsets.component';


const routes: Routes = [
  {
    path: '',
    component: SkillsetsComponent
  },
  {
    path: ':_id',
    component: SkillsetSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class skillsetsRoutingModule { }
