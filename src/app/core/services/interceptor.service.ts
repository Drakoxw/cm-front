import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_CONST } from '../../data/constants/api.constants';
import { ROUTES_PATHS } from '../../data/constants/routes';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router){}

  /**
   * Interceptor para enviar el token en los headers a DB
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * clon del evento Stream :HttpRequest
     */
    let reqClone:HttpRequest<any>;
    /**
     * Parametro Token desde el localStorage
     */
    let tok = localStorage.getItem(API_CONST.TOKEN);

    /* Verifica si hay token para enviarlo a la DB */
    if (tok) {
      reqClone = req.clone({
        setHeaders: {
          Authorization: tok
        }
      })
      return next.handle(reqClone);
    } else {
      /* Sino hay un token retorna la app al login */
      this.router.navigateByUrl(ROUTES_PATHS.LOGIN)
      return next.handle(req);
    }
  }
}
