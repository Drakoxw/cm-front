import { NgModule } from '@angular/core';
import { DashboradComponent } from './dashborad/dashborad.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubRoutingModule } from '../sub-routing.module';



@NgModule({
  declarations: [
    DashboradComponent,
  ],
  imports: [
    SharedModule,
    SubRoutingModule
  ]
})
export class HomeModule { }
