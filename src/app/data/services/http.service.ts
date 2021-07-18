import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_ROUTES } from '../constants/routes';
import { ClientModel } from '../models/clientes.models';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RespCalling, RespCitas } from '../models/respuestas.models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  llamada$ = new EventEmitter<RespCalling | null>();
  dataClienteE$ = new EventEmitter<ClientModel | null>();
  idClienteE$ = new EventEmitter<number | null>();

  constructor(private http: HttpClient){}

/////////////////////////////CLIENTES//////////////////////////////////////////
  /**
   * No importar!
   * Metodo para el cathError
   */
    private error(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`
    }
    return of({error: true, msg: errorMessage, data: null});
  }

  /**
   * Get de todo los Cliente
   * @returns Observable<ResApi> => data.<ClienteModel[]>
   */
  getAllClientes(): Observable<{
    error: boolean,
    msg: string,
    data: ClientModel[]
  }>{
    const res = { error: false, msg: '', data: null }
    return this.http.get<ClientModel[]>(API_ROUTES.CLIENTS)
    .pipe(
      map(r => {
        res.data = r;
        return res.data;
      }), catchError(this.error)
    );
  }

  /**
   * Get de cliente por id
   * @param id El id del cliente a pedir
   * @returns Observable<ResApi> => data.<ClienteModel>
   */
  getCliente(id:string): Observable<{
    error: boolean,
    msg: string,
    data: ClientModel
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<ClientModel>(`${API_ROUTES.CLIENTS}${id}`)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * Post de Cliente Nuevo
   * @param cliente ClienteModel
   * @returns Observable<ResApi> => data.<ClienteModel.id>
   */
  postCliente(cliente: ClientModel): Observable<{
    error: boolean,
    msg: string,
    data: ClientModel
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<ClientModel>(API_ROUTES.CLIENTS, cliente)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

   /**
   * Patch de actualizar Cliente
   * @param cliente Partial<ClientModel>
   * @returns Observable<ResApi> => data.row
   */
  patchCliente(id: string, cliente:Partial<ClientModel>): Observable<{
    error: boolean,
    msg: string,
    data: ClientModel
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.patch<ClientModel>(`${API_ROUTES.CLIENTS}${id}`, cliente)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }
/////////////////////////////CLIENTES//////////////////////////////////////////
/* ------------------------------------------------------------------------- */
////////////////////////////////CITAS//////////////////////////////////////////

  /**
   * Retorna todas las citas sin modificaciones ni agente añadidos
   * @returns Observable<ResApi> => data.<RespCitas[]>
   */
  getAllCitas(): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get(API_ROUTES.CITAS)
    .pipe(
      map(
        r => {
          res.data = r;
          return res;;
        }
      )
    )
  };

  /**
   * Retorna todas las citas de un Cliente sin modificaciones ni agente añadidos
   * @id id del Cliente
   * @returns Observable<ResApi> => data.<RespCitas[]>
   */
  getAllCitasId(id: string): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get(`${API_ROUTES.CITAS}${id}` )
    .pipe(
      map(
        r => {
          res.data = r;
          return res;;
        }
      )
    )
  };

   /**
   * Post de Citas Nuevas
   * @id id del Cliente
   * @param data Partial: RespCitas
   * @returns Observable<ResApi>
   */
  postCita(id: string, data: Partial<RespCitas>): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespCitas>(`${API_ROUTES.CITAS}${id}`, data)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
      );
    }

   /**
   * Actualizador de Citas Nuevo
   * @id id de la cita
   * @param data Partial: RespCitas
   * @returns Observable<ResApi> => data.row
   */
    patchCita(id: string, data: Partial<RespCitas>): Observable<{
      error: boolean,
      msg: string,
      data: RespCitas
    }>{
      const res = { error: false, msg: '', data: null };
      return this.http.patch<RespCitas>(`${API_ROUTES.CITAS}${id}`, data)
      .pipe(
        map(r => {
          res.data = r;
          return res;
        }), catchError(this.error)
        );
      }

////////////////////////////////CITAS//////////////////////////////////////////
/* ------------------------------------------------------------------------- */
////////////////////////////////USERS//////////////////////////////////////////
  getUsers() {
    return this.http.get(`/users/`);
  };
  getUDids() {
    return this.http.get(`/dids`);
  }
  getCall(data) {
    return this.http.post(`/call`, data);
  }
  cambiarPass(obj) {
    return this.http.post(`/passwd`, obj);
  }
///////////////////////////////USERS//////////////////////////////////////////
}

