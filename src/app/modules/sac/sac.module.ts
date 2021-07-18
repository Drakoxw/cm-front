import { NgModule } from '@angular/core';
import { PageSACComponent } from './pages/page-sac/page-sac.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageVerClienteComponent } from './pages/page-ver-cliente/page-ver-cliente.component';
import { PageNuevoClienteComponent } from './pages/page-nuevo-cliente/page-nuevo-cliente.component';
import { PagePagosSACComponent } from './pages/page-pagos-sac/page-pagos-sac.component';
import { NavBarSACComponent } from './components/nav-bar-sac/nav-bar-sac.component';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { CitasComponent } from './components/citas/citas.component';
import { HistorialCrediticioComponent } from './components/historial-crediticio/historial-crediticio.component';
import { CobrosPagosComponent } from './components/cobros-pagos/cobros-pagos.component';
import { CartasComponent } from './components/cartas/cartas.component';


@NgModule({
  declarations: [
    PageSACComponent,
    PageVerClienteComponent,
    PageNuevoClienteComponent,
    PagePagosSACComponent,
    NavBarSACComponent,
    FormClienteComponent,
    DocumentacionComponent,
    CitasComponent,
    HistorialCrediticioComponent,
    CobrosPagosComponent,
    CartasComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SACModule { }
