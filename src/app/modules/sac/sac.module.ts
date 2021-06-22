import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSACComponent } from './page-sac/page-sac.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageConsultarClientesComponent } from './page-consultar-clientes/page-consultar-clientes.component';
import { PageVerClienteComponent } from './page-ver-cliente/page-ver-cliente.component';
import { PageNuevoClienteComponent } from './page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './page-pagos-sac/page-pagos-sac.component';



@NgModule({
  declarations: [
    PageSACComponent,
    PageConsultarClientesComponent,
    PageVerClienteComponent,
    PageNuevoClienteComponent,
    PagePagosSACComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SACModule { }
