import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REGEX } from 'src/app/data/constants/regex';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit, OnChanges {
  @Input() dataCliente: ClientModel;
  dataForm: FormGroup;
  id: string;

  constructor(private router: Router,
              private httpServ: HttpService,
              private activateRoute : ActivatedRoute)
  {
    this.id = activateRoute.snapshot.params['id'];
    this.dataForm = this.createFormG();
  }

  ngOnChanges(c: SimpleChanges): void {
    if (c.dataCliente.currentValue) {
      this.injectCliente();
    }
  }

  ngOnInit(): void {
  }

  log(ev){}

  /**
   * Inyecta el cliente q viene desde el padre
   */
  injectCliente(){
    if (this.dataCliente) {
      this.dataForm.patchValue({
        nombres: this.dataCliente.nombres,
        apellidos: this.dataCliente.apellidos,
        status: this.dataCliente.status,
        ocupacion: this.dataCliente.ocupacion,
        nacimiento: this.dataCliente.nacimiento,
        email: this.dataCliente.email,

        telmovil: this.dataCliente.telmovil,
        telcasa: this.dataCliente.telcasa,
        teltrabajo: this.dataCliente.teltrabajo,
        telwht: this.dataCliente.campos_adicionales.telwht,
        telotro: this.dataCliente.telotro,
        compania_movil: this.dataCliente.campos_adicionales.compania_movil,

        ciudad: this.dataCliente.ciudad,
        zipcode: this.dataCliente.zipcode,
        direccion: this.dataCliente.direccion,
        direccion_reciente: this.dataCliente.campos_adicionales.direccion_reciente,
        apartamento: this.dataCliente.campos_adicionales.apartamento,
        estado: this.dataCliente.estado,

        valor_mensualidad: this.dataCliente.valor_mensualidad,
        plan_mes: this.dataCliente.plan_mes,
        nota_plan_inscripcion: this.dataCliente.campos_adicionales.nota_plan_inscripcion,
        valor_inscripcion: this.dataCliente.valor_inscripcion,
        cuotas_inscripcion: this.dataCliente.campos_adicionales.cuotas_inscripcion,
        fechas_pagos_inscripcion: this.dataCliente.campos_adicionales.fechas_pagos_inscripcion,

        tipo_ingreso: this.dataCliente.campos_adicionales.tipo_ingreso,
        salario: this.dataCliente.salario,
        sueldoS_Q: this.sueldoS_Q,
        dia_pagoS: this.dataCliente.campos_adicionales.dia_pagoS,
        dia_pago: this.dataCliente.campos_adicionales.dia_pago,
        dia_pago2: this.dataCliente.campos_adicionales.dia_pago2,
        pago_renta: this.dataCliente.campos_adicionales.pago_renta,
        capacidad_ahorro: this.dataCliente.campos_adicionales.capacidad_ahorro,
        acredores: this.dataCliente.campos_adicionales.acredores,
        creditos: this.dataCliente.campos_adicionales.creditos,
        deudas_pendientes: this.dataCliente.campos_adicionales.deudas_pendientes,

        horaduerme: this.dataCliente.horaduerme,
        horalevanta:this.dataCliente.horalevanta,
        dialibre: this.dataCliente.dialibre,
        dia_llamar: this.dataCliente.campos_adicionales.dia_llamar,
        horariotrabajo: this.dataCliente.campos_adicionales.horariotrabajo,

        carro: this.dataCliente.campos_adicionales.carro,
        casa: this.dataCliente.campos_adicionales.casa,
        credito_check: this.dataCliente.campos_adicionales.credito_check,
        robo_identidad: this.dataCliente.robo_identidad,
        otraactividad: this.dataCliente.otraactividad,
        contrato_enviado: this.dataCliente.contrato_enviado,
        contrato_firmado: this.dataCliente.contrato_firmado,
        licencia: this.dataCliente.licencia,
        reportex3: this.dataCliente.reportex3,
        empleador: this.dataCliente.empleador,
      });
    }
  }

  /**
   * Generador de controles del formulario Reactivo
   * @returns FormGruop: ClienteModel
   */
  createFormG(){
    return new FormGroup({
      nombres: new FormControl('', [
        Validators.pattern(REGEX.NOMBRES),
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      apellidos: new FormControl('', [
        Validators.pattern(REGEX.APELLIDOS),
        Validators.minLength(4),
        Validators.maxLength(100)
      ]),
      status: new FormControl(''),
      ocupacion: new FormControl('', Validators.maxLength(150)),
      nacimiento: new FormControl('', Validators.pattern(REGEX.FECHAS)),
      email: new FormControl('',  Validators.pattern(REGEX.EMAIL)),

      telmovil: new FormControl('', Validators.pattern(REGEX.TELEFONO)),
      telcasa: new FormControl('', Validators.pattern(REGEX.TELEFONO)),
      teltrabajo: new FormControl('', Validators.pattern(REGEX.TELEFONO)),
      telwht: new FormControl('', Validators.pattern(REGEX.TELEFONO)),
      telotro: new FormControl('', Validators.pattern(REGEX.TELEFONO)),
      compania_movil: new FormControl('', Validators.pattern(REGEX.TELEFONO)),

      zipcode: new FormControl('', Validators.pattern(REGEX.ZIPCODE)),
      ciudad: new FormControl('', Validators.maxLength(100)),
      direccion: new FormControl(''),
      direccion_reciente: new FormControl(''),
      apartamento: new FormControl(''),
      estado: new FormControl(''),

      valor_mensualidad: new FormControl(''),
      plan_mes: new FormControl(''),
      nota_plan_inscripcion: new FormControl('', Validators.maxLength(150)),
      valor_inscripcion: new FormControl(''),
      cuotas_inscripcion: new FormControl(''),
      fechas_pagos_inscripcion: new FormControl(''),

      tipo_ingreso: new FormControl(''),
      salario: new FormControl('', Validators.pattern(REGEX.DINERO)),
      sueldoS_Q: new FormControl(''),
      dia_pagoS: new FormControl(''),
      dia_pago: new FormControl(''),
      dia_pago2: new FormControl(''),
      pago_renta: new FormControl('', Validators.pattern(REGEX.DINERO)),
      capacidad_ahorro: new FormControl('', Validators.pattern(REGEX.DINERO)),
      acredores: new FormControl(''),
      creditos: new FormControl(''),
      deudas_pendientes: new FormControl(''),

      horaduerme: new FormControl(''),
      horalevanta: new FormControl(''),
      dialibre: new FormControl(''),
      dia_llamar: new FormControl(''),
      horariotrabajo: new FormControl(''),

      carro: new FormControl(''),
      casa: new FormControl(''),
      credito_check: new FormControl(''),
      robo_identidad: new FormControl(''),
      otraactividad: new FormControl(''),
      contrato_enviado: new FormControl(''),
      contrato_firmado: new FormControl(''),
      licencia: new FormControl(''),
      reportex3: new FormControl(''),
      empleador: new FormControl('', [
        Validators.pattern(REGEX.NOMBRES),
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
    });
  }

/* ---------------------- getters ------------------------ */
  get nombres(){ return this.dataForm.get('nombres') };
  get empleador(){ return this.dataForm.get('empleador') };
  get apellidos(){ return this.dataForm.get('apellidos') };
  get nacimiento(){ return this.dataForm.get('nacimiento') };
  get ocupacion(){ return this.dataForm.get('ocupacion') };
  get email(){ return this.dataForm.get('email') };
  get telmovil() { return this.dataForm.get('telmovil') };
  get telcasa() { return this.dataForm.get('telcasa') };
  get teltrabajo() { return this.dataForm.get('teltrabajo') };
  get telotro() { return this.dataForm.get('telotro') };
  get telwht() { return this.dataForm.get('telwht') };
  get compania_movil() { return this.dataForm.get('compania_movil') };
  get ciudad() { return this.dataForm.get('ciudad') };
  get zipcode() { return this.dataForm.get('zipcode') };
  get nota_plan_inscripcion() { return this.dataForm.get('nota_plan_inscripcion') };
  get tipo_ingreso() { return this.dataForm.get('tipo_ingreso') };
  get salario() { return this.dataForm.get('salario') };
  get sueldoS_Q() { return this.dataForm.get('sueldoS_Q') };
  get dia_pagoS() { return this.dataForm.get('dia_pagoS') };
  get dia_pago() { return this.dataForm.get('dia_pago') };
  get dia_pago2() { return this.dataForm.get('dia_pago2') };
  get pago_renta() { return this.dataForm.get('pago_renta') };
  get capacidad_ahorro() { return this.dataForm.get('capacidad_ahorro') };
  get acredores() { return this.dataForm.get('acredores') };
  get creditos() { return this.dataForm.get('creditos') };
  get deudas_pendientes() { return this.dataForm.get('deudas_pendientes') };
}
