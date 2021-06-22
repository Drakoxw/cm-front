import { NgModule } from '@angular/core';
import { PageVentasComponent } from './page-ventas/page-ventas.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageVentasComponent
  ],
  imports: [
    SharedModule
  ]
})
export class VentasModule { }
