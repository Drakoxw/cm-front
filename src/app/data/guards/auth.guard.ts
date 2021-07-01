import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FuncionesComunesService } from '../services/funciones-comunes.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { TokenI } from '../models/otros.moldes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  autenticacion: boolean;
  token$: Observable<TokenI>;
  tok: TokenI;

  constructor(private router: Router,
    private FuntSer: FuncionesComunesService,
    private AuthSer: AuthService) { }

  canActivate(): boolean {
    this.token$ = this.AuthSer.getToken$();
    this.token$.subscribe(token => this.tok = token);

    console.log('this.tok', this.tok);

    /*  if (this.tok) {

       const jwtP = this.FuntSer.parseJwt(this.tok.token);
       let now = Date.now();
       now = Number(now.toString().slice(0, -3));

       if (jwtP) {
         console.log(jwtP);
         let exp = Number(jwtP['exp']);
         if (now < exp) {
           this.autenticacion = true;
         } else {
           console.log('token vencido');
           Swal.fire({
             title: 'Sesión Vencida',
             icon: 'error',
             text: 'Vuelva a iniciar su sesión!',
           });
           this.autenticacion = false;
           this.router.navigateByUrl('/login');
         }
       } else {
         this.router.navigateByUrl('/login');
       }
     }

     if (this.autenticacion) {
       return true;
     } else {
       console.log('no autenticado');
       this.router.navigateByUrl('/login');
       return false;
     }
  */


    return true
  }
}
