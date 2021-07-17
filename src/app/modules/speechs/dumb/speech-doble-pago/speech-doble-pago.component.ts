import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';

@Component({
  selector: 'app-speech-doble-pago',
  templateUrl: './speech-doble-pago.component.html',
  styleUrls: ['./speech-doble-pago.component.css']
})
export class SpeechDoblePagoComponent implements OnInit {
  cliente$: Partial<ClientModel>;

  constructor(private httpSer: HttpService, private title: Title)
  {
    title.setTitle('DOBLE PAGO');
  }

  ngOnInit(): void {
    this.httpSer.dataClienteE$.subscribe(r => this.cliente$ = r);
  }

}
