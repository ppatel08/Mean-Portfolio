import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./services/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'skillsets',
        loadChildren: () => import('./skillset/skillset.module').then(m => m.SkillsetsModule)
      },
      {
        path: 'experiences',
        loadChildren: () => import('./experience/experience.module').then(m => m.ExperiencesModule)
      },
      {
        path: 'contactus',
        loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
