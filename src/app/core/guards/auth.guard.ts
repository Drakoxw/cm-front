import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { API_CONST } from '../../data/constants/api.constants';
import { ROUTES_PATHS } from '../../data/constants/routes/index'
import Swal from 'sweetalert2';

import { FuncionesComunesService } from '../../data/services/funciones-comunes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  autenticacion: boolean;

  constructor(private router: Router,
    private FuntSer: FuncionesComunesService) { }

  canActivate(): boolean {
    /**
     * variable token desde el localstorage
     */
    let tok = localStorage.getItem(API_CONST.TOKEN)

    if (tok) {
      /**
       * constante del token ya parseado
       */
      const jwtP = this.FuntSer.parseJwt(tok);
      let now = Date.now();
      now = Number(now.toString().slice(0, -3));

      if (jwtP) {
        let exp = Number(jwtP['exp']);
        if (now < exp) {
          this.autenticacion = true;
        } else {
          Swal.fire({
            title: 'Sesión Vencida',
            icon: 'error',
            text: 'Vuelva a iniciar su sesión!',
          });
          this.autenticacion = false;
          this.router.navigateByUrl(`/${ROUTES_PATHS.LOGIN}`);
        }
      } else {
        this.router.navigateByUrl(`/${ROUTES_PATHS.LOGIN}`);
      }
    }
    if (this.autenticacion) {
      return true;
    } else {
      this.router.navigateByUrl(`/${ROUTES_PATHS.LOGIN}`);
      return false;
    }
  }
}
