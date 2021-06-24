import { NgModule } from '@angular/core';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageAdminComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
