import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PageSACComponent } from './sac/page-sac/page-sac.component';
import { PageSupervisorComponent } from './supervisor/page-supervisor/page-supervisor.component';
import { PageVentasComponent } from './ventas/page-ventas/page-ventas.component';


const routes: Routes = [
  { path: 'ventas', component: PageVentasComponent },
  { path: 'sac', component: PageSACComponent },
  { path: 'supervisor', component: PageSupervisorComponent },
  { path: 'admin', component: PageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubRoutingModule { }
