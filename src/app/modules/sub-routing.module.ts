import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../data/guards/auth.guard';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PageNuevoClienteComponent } from './sac/page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './sac/page-pagos-sac/page-pagos-sac.component';
import { PageSACComponent } from './sac/page-sac/page-sac.component';
import { PageVerClienteComponent } from './sac/page-ver-cliente/page-ver-cliente.component';
import { PageSupervisorComponent } from './supervisor/page-supervisor/page-supervisor.component';
import { PageVentasComponent } from './ventas/page-ventas/page-ventas.component';


const routes: Routes = [
  { path: 'ventas', component: PageVentasComponent, canActivate: [AuthGuard] },
  { path: 'sac', component: PageSACComponent, canActivate: [AuthGuard] },
  { path: 'supervisor', component: PageSupervisorComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: PageAdminComponent, canActivate: [AuthGuard] },
  { path: 'cliente/:id', component: PageVerClienteComponent, canActivate: [AuthGuard] },
  { path: 'crearcliente', component: PageNuevoClienteComponent, canActivate: [AuthGuard] },
  { path: 'pagosac', component: PagePagosSACComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubRoutingModule { }
