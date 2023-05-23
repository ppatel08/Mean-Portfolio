import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesSaveComponent } from './services-save/services-save.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: ':_id',
    component: ServicesSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
