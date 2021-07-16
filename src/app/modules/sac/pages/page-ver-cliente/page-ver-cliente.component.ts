import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';

@Component({
  selector: 'app-page-ver-cliente',
  templateUrl: './page-ver-cliente.component.html',
  styleUrls: ['./page-ver-cliente.component.css']
})
export class PageVerClienteComponent implements OnInit {

  name:string;
  id: string;
  nombreCliente: string;

  clienteForm = this.fg.group({

  })

  dataForm: FormGroup;
  constructor(private router: Router,
              private fg: FormBuilder,
              private httpServ: HttpService,
              private activateRoute : ActivatedRoute)
  {
    this.id = activateRoute.snapshot.params['id'];
    this.dataForm = this.createFormG();
  }

  ngOnInit(): void {
    this.getCliente();
  }

  createFormG(){
    return new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      status: new FormControl(''),
      ocupacion: new FormControl(''),
      nacimiento: new FormControl(''),
      email: new FormControl(''),

      telmovil: new FormControl(''),
      telcasa: new FormControl(''),
      teltrabajo: new FormControl(''),
      telwht: new FormControl(''),
      telotro: new FormControl(''),

      zipcode: new FormControl(''),
      ciudad: new FormControl(''),
      direccion: new FormControl(''),
      apartamento: new FormControl(''),
      estado: new FormControl(''),

      valor_mensualidad: new FormControl(''),
      plan_mes: new FormControl(''),
      nota_plan_inscripcion: new FormControl(''),
      valor_inscripcion: new FormControl(''),
      cuotas_inscripcion: new FormControl(''),
      fechas_pagos_inscripcion: new FormControl(''),





    })
  }



  /**
   * Trae todo los Clientes
   * metodo temporal requiere cambios
   */
  getCliente(){
    this.httpServ.getCliente(this.id).subscribe( res => {
      if (!res.error) {
        this.nombreCliente = `${res.data.nombres} ${res.data.apellidos}`
        this.dataForm.patchValue({
          nombres: res.data.nombres,
          apellidos: res.data.apellidos,
          status: res.data.status,
          ocupacion: res.data.ocupacion,
          email: res.data.email,
          nacimiento: res.data.nacimiento,

          telmovil: res.data.telmovil,
          telcasa: res.data.telcasa,
          teltrabajo: res.data.teltrabajo,
          telwht: res.data.campos_adicionales.telwht,
          telotro: res.data.telotro,

          zipcode: res.data.zipcode,
          ciudad: res.data.ciudad,
          direccion: res.data.direccion,
          apartamento: res.data.campos_adicionales.apartamento,
          estado: res.data.estado,

          valor_mensualidad: res.data.valor_mensualidad,
          plan_mes: res.data.plan_mes,
          nota_plan_inscripcion: res.data.campos_adicionales.nota_plan_inscripcion,
          valor_inscripcion: res.data.valor_inscripcion,
          cuotas_inscripcion: res.data.campos_adicionales.cuotas_inscripcion,
          //fechas_pagos_inscripcion: res.data.campos_adicionales.fechas_pagos_inscripcion,



        })
        console.log(res.data);
      }
    });
  }

}
