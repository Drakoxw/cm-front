import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_ROUTES } from '../constants/routes';
import { FechasPagos, RespPatch, RespPost } from '../models/otros.moldes';
import { RespPagos, RespDocumentos, RespReporteCred, PayloadCobros, RespCobros, RespCart, PaylGenCobro } from '../models/respuestas.models';

@Injectable({
  providedIn: 'root'
})
export class HttpSegundarioService {

  constructor(private http: HttpClient) { }

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


////////////////////////////////DOCUMENTOS//////////////////////////////////////////
  /**
   * Get de todos los documentos relacionados a un cliente
   * @param id del cliente del q se busca la documentación
   * @returns Objeto: RespDocumentos
   */
  getDocumentos(id: string): Observable<{
    error: boolean,
    msg: string,
    data: RespDocumentos
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespDocumentos>(`${API_ROUTES.DOCUMENTS}${id}`)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * Post de Documentos
   * @param id del cliente
   * @param data Partial: RespDocumentos
   * @returns el id del documento creado
   */
  postDocumentos(id: string, data: Partial<RespDocumentos>): Observable<{
    error: boolean,
    msg: string,
    data: RespPost
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespPost>(`${API_ROUTES.DOCUMENTS}${id}`, data)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }
////////////////////////////////DOCUMENTOS//////////////////////////////////////////
/* ------------------------------------------------------------------------- */
///////////////////////////////HISTORIAL CREDITICIO/////////////////////////////////

  /**
   * GET de todos el historial crediticio relacionados a un cliente
   * @param id del cliente del q se busca la documentación
   * @returns Objeto: RespDocumentos
   */
   getHistorCredi(id: string): Observable<{
    error: boolean,
    msg: string,
    data: RespReporteCred
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespReporteCred>(`${API_ROUTES.DOCUMENTS}${id}`)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * POST de historial Crediticio
   * @param id del cliente
   * @param data Partial: RespReporteCred
   * @returns el id del historial creado
   */
  postHistorCredi(id: string, data: Partial<RespReporteCred>): Observable<{
    error: boolean,
    msg: string,
    data: RespPost
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespPost>(`${API_ROUTES.DOCUMENTS}${id}`, data)
    .pipe(
      map(r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

/////////////////////////////HISTORIAL CREDITICIO//////////////////////////////
/* ------------------------------------------------------------------------- */
////////////////////////////////PAGOS//////////////////////////////////////////
  /**
   * GET de pagos y cobros relacionados a un cliente
   * @param id del cliente
   * @returns Objeto: DataPagos
   */
  getPagosCli(id: string): Observable<{
    error: boolean,
    msg: string,
    data: RespPagos
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespPagos>(`${API_ROUTES.COBROS}${id}`)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * GET de todos los Pagos en general
   * @returns Objeto: DataPagos
   */
  getPagos(): Observable<{
    error: boolean,
    msg: string,
    data: RespPagos
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespPagos>(API_ROUTES.COBROS)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * GET de pagos filtrado por fechas
   * @param data - FechasPagos
   * @returns Objeto: DataPagos
   */
  getPagosFechas(data: FechasPagos): Observable<{
    error: boolean,
    msg: string,
    data: RespPagos
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespPagos>(API_ROUTES.COBROS, data)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * PATCH del pago para modificar parametros
   * @param id del cobro a midificar
   * @param formPago datos a cambiar
   * @returns respuesta universal: RespPatch
   */
  patchPago(id: string, formPago:Partial<RespPagos>): Observable<{
    error: boolean,
    msg: string,
    data: RespPatch
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.patch<RespPatch>(`${API_ROUTES.COBROS}${id}`, formPago)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

////////////////////////////////PAGOS//////////////////////////////////////////
/* ------------------------------------------------------------------------- */
////////////////////////////////COBROS/////////////////////////////////////////
  /**
   * GET de todos los cobros
   * @returns Objeto: RespCobros
   */
  getCobroS(): Observable<{
    error: boolean,
    msg: string,
    data: RespCobros
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespCobros>(API_ROUTES.COBROS)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * GET de Cobros Filtando por fechas
   * @param data : FechasPagos
   * @returns Objeto: RespCobros
   */
  getCobrosFechas(data: FechasPagos): Observable<{
    error: boolean,
    msg: string,
    data: RespCobros
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespCobros>(API_ROUTES.COBROS, data)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   * POST metodo generador de cobros
   * @param id del cliente
   * @param formCobro : PaylGenCobro
   * @returns : RespPost
   */
  postCobros(id: string, formCobro: PaylGenCobro): Observable<{
    error: boolean,
    msg: string,
    data: RespPost
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespPost>(`${API_ROUTES.COBROS}${id}`, formCobro)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  /**
   *
   * @param id del cobro a cambiar de estado
   * @param formPago :PayloadCobros
   * @returns :RespPatch
   */
  patchCobros(id: string, formPago: PayloadCobros): Observable<{
    error: boolean,
    msg: string,
    data: RespPatch
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.patch<RespPatch>(`${API_ROUTES.COBROS}${id}`, formPago)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }
////////////////////////////////COBROS/////////////////////////////////////////
/* ------------------------------------------------------------------------- */
////////////////////////////////CARTAS/////////////////////////////////////////
  /**
   * GET de las catas del cliente
   * @param id del cliente
   * @returns Objeto: RespCart
   */
  getCartas(id: string): Observable<{
    error: boolean,
    msg: string,
    data: RespCart
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.get<RespCart>(`${API_ROUTES.CARTAS}${id}`)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }

  postCartas(id: string, formCartas: RespCart): Observable<{
    error: boolean,
    msg: string,
    data: RespPost
  }>{
    const res = { error: false, msg: '', data: null };
    return this.http.post<RespPost>(`${API_ROUTES.CARTAS}${id}`, formCartas)
    .pipe(
      map( r => {
        res.data = r;
        return res;
      }), catchError(this.error)
    );
  }
////////////////////////////////CARTAS/////////////////////////////////////////
/* ------------------------------------------------------------------------- */


}
