import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FuncionesComunesService } from './funciones-comunes.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  token: String;

  constructor(private router : Router,
              private httpServ: AuthService,)
  {
  }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    let reqClone;
    this.token = localStorage.getItem('token');

    if (this.token){
      reqClone = req.clone({
        setHeaders: {
          Authorization: String(this.token)
        }
      })
      return next.handle(reqClone);
    } else {
      console.log('user',this.httpServ.userLogin);
      this.router.navigateByUrl('/login');
    }
    return next.handle(req);

  }
}
