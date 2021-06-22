import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { CitasFormComponent } from './components/citas-form/citas-form.component';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { DatosAdicionalesComponent } from './components/datos-adicionales/datos-adicionales.component';
import { LlamadasModalComponent } from './components/llamadas-modal/llamadas-modal.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ProspectosPerdidosComponent } from './components/prospectos-perdidos/prospectos-perdidos.component';

@NgModule({
  imports: [

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    ...fromComponents.Components,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.Components
  ]
})
export class SharedModule { }
