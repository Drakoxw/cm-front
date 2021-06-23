import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PageConsultarClientesComponent } from './sac/page-consultar-clientes/page-consultar-clientes.component';
import { PageNuevoClienteComponent } from './sac/page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './sac/page-pagos-sac/page-pagos-sac.component';
import { PageSACComponent } from './sac/page-sac/page-sac.component';
import { PageVerClienteComponent } from './sac/page-ver-cliente/page-ver-cliente.component';
import { PageSupervisorComponent } from './supervisor/page-supervisor/page-supervisor.component';
import { PageVentasComponent } from './ventas/page-ventas/page-ventas.component';


const routes: Routes = [
  { path: 'ventas', component: PageVentasComponent },
  { path: 'sac', component: PageSACComponent },
  { path: 'supervisor', component: PageSupervisorComponent },
  { path: 'admin', component: PageAdminComponent},
  { path: 'cliente/:id', component: PageVerClienteComponent},
  { path: 'listarclientes', component: PageConsultarClientesComponent},
  { path: 'crearcliente', component: PageNuevoClienteComponent},
  { path: 'pagosac', component: PagePagosSACComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubRoutingModule { }
