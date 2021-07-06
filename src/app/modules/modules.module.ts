import { NgModule } from '@angular/core';
import { SubRoutingModule } from './sub-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { SACModule } from './sac/sac.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { VentasModule } from './ventas/ventas.module';
import { SpeechsModule } from './speechs/speechs.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AdminModule,
    HomeModule,
    SACModule,
    SupervisorModule,
    SpeechsModule,
    VentasModule,
    SubRoutingModule
  ]
})
export class ModulesModule { }
