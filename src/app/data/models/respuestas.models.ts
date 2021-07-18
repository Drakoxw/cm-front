
export interface RespCalling {
  did_local: string,
  ext: string,
  id_cliente: string,
  numero_entrante: string,
}

export interface Usuarios {
  apellido: string,
  id: string,
  nombre: string,
}

export interface UsuariosCall {
  departamento: string,
  ext: string,
  ipaddress: string,
  nombres: string,
  status: string,
}

export interface Dids {
  did: string,
  estado: string,
  numero: string,
}



export interface RespCitas {
  id: string,
  id_cliente: string,
  id_user: string,
  id_asignado: string,
  fechahora: string,
  asignado: string, ///
  estado: string,
  motivo: string,
  notas: string,
  fecha_creacion: string,
  apellidos: string,
  nombres: string,
  ////datos add
  mesEl: string,
  horaAlarma: string,
  horaAlarmaF: string,
  tempo: number,
  tempo2: number,
  tempo3: number,
  limit: number,
}

export interface RespDocumentos {
  descripcion: string,
  documento: string, //ruta del documento
  fecha_creacion: string,
  id: string,
  id_cliente: string,
  id_user: string,
  tipo_documento: string,
  vencimiento: string,
}

export interface RespReporteCred {
  estado: string,
  buro: string,
  cuenta: string,
  acreedor: string,
  fecha: string,
  razon: string,
  numero_cuenta: string,
  carta_acredor: string,
}

export interface RespPagos {
  color: string,
  descripcion: string,
  fecha_creacion: string,
  fecha_pago: string,
  id: string,
  id_asesor: string,
  id_cliente: string,
  id_user: string,
  medio: string,
  nombres: string,
  num_pago: string,
  plan_mes: number,
  status: string,
  tipo_pago: string,
  valor: number,
  valor_inscripcion: number,
  valor_mensualidad: number,
}

export interface RespCobros {
  color: string,
  fecha_pago: string,
  id: string,
  id_cliente: string,
  nombres: string,
  status: string
}

export class RespCart {
  buro: string;
  carta: string;
  cuentas: string;
  fecha_creacion: string;
  fecha_envio: string;
  id: string;
  id_cliente: string;
  id_user: string;
  ronda: string;
  tracking: string;
}


/* ----------------payloads---------------------- */
export interface PayloadCobros {
  descripcion: string,
  fecha_pago: string,
  id_asesor: string,
  status: string,
  tipo_pago: string,
}

export interface PaylGenCobro {
  color: number,
  descripcion: string,
  fecha_pago: string,
  id_user: string,
  medio: number,
  num_pago: number,
  tipo_pago: string,
  valor: number
}



