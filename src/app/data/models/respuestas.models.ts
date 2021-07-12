
export interface RespCalling {
  did_local: string
  ext: string
  id_cliente: string
  numero_entrante: string
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
  mesEl: string,
  horaAlarma: string,
  horaAlarmaF: string,
  tempo: number,
  tempo2: number,
  tempo3: number,
  limit: number,
}
