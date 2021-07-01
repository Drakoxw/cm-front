import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FuncionesComunesService {
  visualizar_speech: string = '';/////////
  puerta: number = 0;////////////////////
  nombre_pros: string;
  ss: string;
  hoy = new Date();

  constructor(private sanitizer: DomSanitizer) { }

  getDatos() {
    let data = [this.nombre_pros, this.ss];
    console.log(data);
    return data;
  }

  ordenar(data) {
    data.sort(function (a, b) {
      if (a.fechahora < b.fechahora) {
        return 1;
      }
      if (a.fechahora > b.fechahora) {
        return -1;
      }
      return 0;
    });
  }

  ordenar2(data) {
    data.sort(function (a, b) {
      if (a.fechahora > b.fechahora) {
        return 1;
      }
      if (a.fechahora < b.fechahora) {
        return -1;
      }
      return 0;
    });
  }

  base64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event); // crea un DOMString que contiene una URL que representa al objeto pasado como parámetro.
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
    }
    );

  parseJwt(token) { //parseador de tokens
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

}
