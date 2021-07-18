
export interface Usuario {
  password: string,
  user: string
}

export interface Pass {
  old_passwd: string,
  new_passwd: string,
}

export interface Llamada {
  tipo_tel: string,
  id_cliente: string,
  did: string,
}

export interface TokenI {
  token:string
}

export interface RespApi {
  error: boolean,
  msg: string,
  data: {}
}

export interface FechasPagos {
  fecha_inicio: string,
  fecha_final: string
}

export interface RespPost{
  id: number
}

export interface RespPatch{
  rows: number
}


