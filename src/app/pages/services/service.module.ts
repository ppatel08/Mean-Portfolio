import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './service-routing.module';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesSaveComponent } from './services-save/services-save.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServicesSaveComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServiceModule { }
