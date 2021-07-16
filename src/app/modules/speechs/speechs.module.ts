import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarcoSpeechsComponent } from './components/marco-speechs/marco-speechs.component';
import { BuscadorSpeechsComponent } from './components/buscador-speechs/buscador-speechs.component';
import { SpeechDoblePagoComponent } from './dumb/speech-doble-pago/speech-doble-pago.component';
import { SpeechSiDiosQuiereComponent } from './dumb/speech-si-dios-quiere/speech-si-dios-quiere.component';
import { PageRanaReneComponent } from './pages/page-rana-rene/page-rana-rene.component';
import { SpeechLlamadaRadioComponent } from './smart/speech-llamada-radio/speech-llamada-radio.component';
import { Speech800914Component } from './smart/speech800-914/speech800914.component';



@NgModule({
  declarations: [
    MarcoSpeechsComponent,
    BuscadorSpeechsComponent,
    SpeechDoblePagoComponent,
    SpeechSiDiosQuiereComponent,
    PageRanaReneComponent,
    SpeechLlamadaRadioComponent,
    Speech800914Component,
  ],
  imports: [
    SharedModule
  ]
})
export class SpeechsModule { }
