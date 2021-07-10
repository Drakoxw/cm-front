
export interface Usuario {
  password: string,
  user: string
}
export interface TokenI {
  token:string
}

export interface RespApi {
  error: boolean,
  msg: string,
  data: {}
}
