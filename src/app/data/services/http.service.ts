import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_ROUTES } from '../constants/routes';
import { ClientModel } from '../models/clientes.models';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RespCalling } from '../models/respuestas.models';

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
   * @returns Observable<ResApi>
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
   * @returns Observable<ResApi>
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
   * @returns id
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
   * @param cliente ClienteModel
   * @returns row
   */
  patchCliente(cliente: ClientModel, id: string): Observable<{
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

  getAllCitas(){};
  getCitaId(){};
  postCita(){};
  patchCita(){};

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
///////////////////////////////USERS//////////////////////////////////////////
}

