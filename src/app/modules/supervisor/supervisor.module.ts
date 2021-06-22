import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSupervisorComponent } from './page-supervisor/page-supervisor.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageSupervisorComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SupervisorModule { }
