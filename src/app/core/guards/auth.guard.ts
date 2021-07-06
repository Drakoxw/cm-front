import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { API_CONST } from '../../data/constants/api.constants';
import Swal from 'sweetalert2';

import { FuncionesComunesService } from '../../data/services/funciones-comunes.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  autenticacion: boolean;

  constructor(private router: Router,
    private FuntSer: FuncionesComunesService) { }

  canActivate(): boolean {
    let tok = localStorage.getItem(API_CONST.TOKEN)

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
