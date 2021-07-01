import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FuncionesComunesService } from './funciones-comunes.service';
import { TokenI } from '../models/otros.moldes';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  autenticacion: boolean;
  token$: Observable<TokenI>;
  tok: TokenI;

  constructor(private router: Router,
    private AuthSer: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token$ = this.AuthSer.getToken$();
    this.token$.subscribe(token => this.tok = token);

    let reqClone;

    if (this.tok) {
      reqClone = req.clone({
        setHeaders: {
          Authorization: String(this.tok)
        }
      })
      return next.handle(reqClone);
    } else {
      console.log('user', this.AuthSer.userLogin);
      this.router.navigateByUrl('/login');
    }
    return next.handle(req);

  }
}
