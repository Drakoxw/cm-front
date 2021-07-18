import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REGEX } from 'src/app/data/constants/regex';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';

@Component({
  selector: 'app-page-ver-cliente',
  templateUrl: './page-ver-cliente.component.html',
  styleUrls: ['./page-ver-cliente.component.css']
})
export class PageVerClienteComponent implements OnInit, OnChanges {
  dataCliente: ClientModel;
  id: string;
  nombreCliente: string;
  nombre:string;
  opcion:number = 1

  titulo: string;

  constructor(private router: Router,
              private httpServ: HttpService,
              private activateRoute : ActivatedRoute)
  {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnChanges(c: SimpleChanges): void {
    if (c.titulo.currentValue) {
      alert('cambio'+ c.titulo.currentValue)
    }
  }

  ngOnInit(): void {
    this.getCliente();
  }

  /**
   * Trae todo los Clientes
   * y los pasa al hijo => formClienteComp
   */
  getCliente(){
    this.httpServ.getCliente(this.id).subscribe( res => {
      if (!res.error) {
        this.dataCliente = res.data;
        this.nombreCliente = `${res.data.nombres} ${res.data.apellidos}`
        this.nombre = `${res.data.nombres}`;
      }
    })
  }






}
