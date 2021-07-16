
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES_PATHS } from '../../data/constants/routes/index'
import { PageRanaReneComponent } from './pages/page-rana-rene/page-rana-rene.component';
import { ServicioClienteComponent } from './pages/servicio-cliente/servicio-cliente.component';


const routes: Routes = [
  { path: ROUTES_PATHS.SPEECH.RANARENE, component: PageRanaReneComponent},
  { path: ROUTES_PATHS.SPEECH.SERVICE, component: ServicioClienteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SpeechRoutingModule { }
