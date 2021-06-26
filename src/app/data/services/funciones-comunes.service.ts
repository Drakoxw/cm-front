import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FuncionesComunesService {


  visualizar_speech : string = '';/////////
  puerta: number = 0;////////////////////
  nombre_pros:string;
  ss: string;
  hoy = new Date();

  constructor(private sanitizer: DomSanitizer) {}

  getDatos(){
    let data = [this.nombre_pros, this.ss];
    console.log(data);
    return data;
  }

  getFecha(): string{
    let mes:any = this.hoy.getMonth()+1;
    let dia:any = this.hoy.getDate();
    if (mes < 10) mes = `0${mes}`;
    if (dia < 10) dia = `0${dia}`;
    return `${this.hoy.getFullYear()}-${mes}-${dia}`;
  }

  getHora():string{
    let min:any = this.hoy.getMinutes();
    let hora:any = this.hoy.getHours();
    let sec:any = this.hoy.getSeconds();

    if (min < 10) min = `0${min}`;
    if (hora < 10) hora = `0${hora}`;
    if (sec < 10) sec = `0${sec}`;

    return `${hora}:${min}:${sec}`;
  }

  getHoy():string{
    return `${this.getFecha()} 00:00:01`;
  }

  shoterAlert(t:number,h:string):string{
    const hoy = this.getFecha()

    let min:any = this.hoy.getMinutes();
    let hora:any = this.hoy.getHours();
    if (t > min) {
      min = min + 60;
      hora = hora - 1;
    }

    if (min < 10) min = `0${min}`;
    if (hora < 10) hora = `0${hora}`;
    min = min - t;
    const horaAlarma = `${hora}:${min}`
    return horaAlarma
  }

  getTomorrow(){
    let manana =this.toTimeStamp(this.getHoy());
    manana = manana + 86400000;

    let año:any = this.fromTimeStamp(manana).getFullYear();
    let mes:any = this.fromTimeStamp(manana).getMonth();
    let dia:any = this.fromTimeStamp(manana).getDate();
    let hora:any = this.fromTimeStamp(manana).getMonth();
    let min:any = this.fromTimeStamp(manana).getMinutes();
    let sec:any = this.fromTimeStamp(manana).getSeconds();

    mes = mes +1;

    if (mes < 10) mes = `0${mes}`;
    if (dia < 10) dia = `0${dia}`;
    if (min < 10) min = `0${min}`;
    if (hora < 10) hora = `0${hora}`;
    if (sec < 10) sec = `0${sec}`;

    return `${año}-${mes}-${dia} 00:00:01`;
  }

  generateHoraAlarma(hora:string, t:number){
    let horaT =this.toTimeStamp(hora);
    const tM = t * 60000;
    const horaAlarma = this.fromTimeStamp(horaT - tM);
    let h:any = horaAlarma.getHours();
    let m:any = horaAlarma.getMinutes();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    return `${h}:${m}`;
  }

  toTimeStamp(time: string):number{
    let t = new Date(time);
    return t.getTime();
  }

  fromTimeStamp(time:number){
    const date = new Date(time);
    return date;
  }

  ordenar(data){
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

  ordenar2(data){
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

  parseJwt(token){ //parseador de tokens
    try {
    return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
    return null;
    }
  };

}
