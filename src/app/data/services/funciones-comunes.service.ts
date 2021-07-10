import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FuncionesComunesService {

  constructor(private sanitizer: DomSanitizer) { }

  /**
   * Meto de Orden Ascendente
   * @param data de tipo any[]
   */
  ordenarAsc(data:[]) {
    data.sort(function (a: any, b: any) {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });
  }
  /**
   * Metodo de Orden Descendente
   * @param data Array
   */
  ordenarDesc(data: []) {
    data.sort(function (a: any, b: any) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Metodo Asincrono de Archivos a BASE64
   * @param $event Evento de input tipo File
   * @returns El archivo en BASE64
   */
  base64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        /**
         * crea un DOMString que contiene una URL que representa al objeto pasado como parámetro.
         */
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            blob: $event,
            image,
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            blob: $event,
            image,
            base: null,
          });
        };
      } catch (err) {
        console.log(err);
        return null;
      }
    });



  /**
   * Parseador de Token
   * Si no recibe un string token devuelve un NULL
   * @param token :string
   * @returns token parseado
   */
  parseJwt(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

}
