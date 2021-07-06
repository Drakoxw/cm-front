import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES_PATHS } from '../data/constants/routes/inter.routes';



import { AuthGuard } from '../core/guards/auth.guard';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PageNuevoClienteComponent } from './sac/page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './sac/page-pagos-sac/page-pagos-sac.component';
import { PageSACComponent } from './sac/page-sac/page-sac.component';
import { PageVerClienteComponent } from './sac/page-ver-cliente/page-ver-cliente.component';
import { PageSupervisorComponent } from './supervisor/page-supervisor/page-supervisor.component';
import { PageVentasComponent } from './ventas/page-ventas/page-ventas.component';


const routes: Routes = [
  { path: ROUTES_PATHS.VENTAS , component: PageVentasComponent, canActivate: [AuthGuard] },
  { path: ROUTES_PATHS.SAC , component: PageSACComponent, canActivate: [AuthGuard] },
  { path: ROUTES_PATHS.SUPERV , component: PageSupervisorComponent, canActivate: [AuthGuard] },
  { path: ROUTES_PATHS.ADMIN , component: PageAdminComponent, canActivate: [AuthGuard] },
  { path: ROUTES_PATHS.ADDCLIENT , component: PageNuevoClienteComponent, canActivate: [AuthGuard] },
  { path: ROUTES_PATHS.PAYSAC , component: PagePagosSACComponent, canActivate: [AuthGuard] },
  { path: `${ROUTES_PATHS.CLIENT}/:id`, component: PageVerClienteComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubRoutingModule { }
