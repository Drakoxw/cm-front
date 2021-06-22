import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSACComponent } from './page-sac/page-sac.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageSACComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SACModule { }
