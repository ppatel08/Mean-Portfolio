import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';


const SERVICES = [
  UserService,
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...SERVICES, ],
  declarations: []
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return <ModuleWithProviders<ApiModule>>{
      ngModule: ApiModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
