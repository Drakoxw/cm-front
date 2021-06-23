export interface ClientModel {
  id: string,
  nombres: string,
  apellidos: string,
  asignado: number,
  ciudad: string,
  creadopor: number,
  capacidad_ahorro: number,
  contrato_firmado: number,
  contrato_enviado: number,
  dialibre: string,
  direccion: string,
  email: string,
  email2: string,
  empleador: string,
  estado: string,
  fecha_creacion: string,
  horaduerme: string,
  horalevanta: string,
  horariotrabajo: string,
  licencia: number,
  motivacion: string,
  nacimiento: string,
  numero_id: string,
  ocupacion: string,
  otraactividad: string,
  propiedades: string,
  robo_identidad: number,
  reportex3: number,
  salario: number,
  status: number,
  tipopago: string,
  teltrabajo: string,
  telmovil: string,
  telcasa: string,
  telotro: string,
  tipo_id: number,
  valor_inscripcion: number,
  valor_mensualidad: number,
  zipcode: number,


  campos_adicionales: Campos_adicionales,

  sueldoS_Q: string,

}
export interface Campos_adicionales {
  pago_renta: number,
  carro: number,
  casa: number,
  call_trabajo: string,
  credito_check: string,
  tipo_ingreso: string,
  sueldoS_Q: string,
  direccion_reciente: string,
  id_tarjeta: string,
  exp: string,
  nombres_tarjeta: string,
  tipo_tarjeta: number,
  banco: string,
  cv: string,
  compania_movil: string,

  /*  */
  tipo_trabajo: string,
  dia_pago: string,
  dia_llamar: number,
  nota_supervisor: string,
  notas: string,


  /*  */
  nombre_agent_nota: string

}
