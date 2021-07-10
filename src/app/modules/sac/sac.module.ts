import { NgModule } from '@angular/core';
import { PageSACComponent } from './pages/page-sac/page-sac.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageVerClienteComponent } from './pages/page-ver-cliente/page-ver-cliente.component';
import { PageNuevoClienteComponent } from './pages/page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './pages/page-pagos-sac/page-pagos-sac.component';
import { NavBarSACComponent } from './components/nav-bar-sac/nav-bar-sac.component';


@NgModule({
  declarations: [
    PageSACComponent,
    PageVerClienteComponent,
    PageNuevoClienteComponent,
    PagePagosSACComponent,
    NavBarSACComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SACModule { }
