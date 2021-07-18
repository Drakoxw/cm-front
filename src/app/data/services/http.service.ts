import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_ROUTES } from '../constants/routes';
import { ClientModel } from '../models/clientes.models';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dids, RespCalling, RespCitas, Usuarios, UsuariosCall } from '../models/respuestas.models';
import { Llamada, Pass } from '../models/otros.moldes';

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
    return this.http.get<RespCitas>(API_ROUTES.CITAS)
    .pipe(
      map(r => {
        res.data = r;
        return res.data;
      }), catchError(this.error)
    );
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
    return this.http.get<RespCitas>(`${API_ROUTES.CITAS}${id}` )
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

  /**
   * GET de todos los usuarios registrados
   * @returns Objeto: Usuarios
   */
  getUsers(): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<Usuarios>(`/users/`)
    .pipe(
      map(r => {
        res.data = r;
        return res.data;
      }), catchError(this.error)
    );
  };

  /**
   * GET de los dids
   * @returns Objeto: Dids
   */
  getUDids(): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<Dids>(`/dids`)
    .pipe(
      map(r => {
        res.data = r;
        return res.data;
      }), catchError(this.error)
    );
  }

  /**
   * GET de los usuarios con extensiones activas
   * @returns Objeto: UsuariosCall
   */
  getUserExt(): Observable<{
    error: boolean,
    msg: string,
    data: RespCitas
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<UsuariosCall>(`/phones`)
    .pipe(
      map(r => {
        res.data = r;
        return res.data;
      }), catchError(this.error)
    );
  };

  /**
   * POST de cambio de contraseña de usuarios
   * @param obj
   * @returns
   */
  cambiarPass(obj:Pass) {
    return this.http.post(`/passwd`, obj);
  }

  /**
   * Metodo para llamar a un cliente
   * @param data
   * @returns La llamada al cliente selecionado
   */
  llamar(data:Llamada) {
    return this.http.post(`/call`, data);
  }
///////////////////////////////USERS//////////////////////////////////////////
}

