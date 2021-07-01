import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroTimeService {

  /**
   * propiedad base de libreria
   */
  hoy = new Date();

  /**
   *
   */
  getFecha(): string {
    let mes: any = this.hoy.getMonth() + 1;
    let dia: any = this.hoy.getDate();
    if (mes < 10) mes = `0${mes}`;
    if (dia < 10) dia = `0${dia}`;
    return `${this.hoy.getFullYear()}-${mes}-${dia}`;
  }

  /**
   *
   * @returns
   */
  getHora(): string {
    let min: any = this.hoy.getMinutes();
    let hora: any = this.hoy.getHours();
    let sec: any = this.hoy.getSeconds();

    if (min < 10) min = `0${min}`;
    if (hora < 10) hora = `0${hora}`;
    if (sec < 10) sec = `0${sec}`;

    return `${hora}:${min}:${sec}`;
  }

  /**
   *
   * @returns
   */
  getHoy(): string {
    return `${this.getFecha()} 00:00:01`;
  }

  /**
   *
   * @param t
   * @param h
   * @returns
   */
  shoterAlert(t: number, h: string): string {
    const hoy = this.getFecha()

    let min: any = this.hoy.getMinutes();
    let hora: any = this.hoy.getHours();
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


  /**
   *
   * @returns
   */
  getTomorrow() {
    let manana = this.toTimeStamp(this.getHoy());
    manana = manana + 86400000;

    let año: any = this.fromTimeStamp(manana).getFullYear();
    let mes: any = this.fromTimeStamp(manana).getMonth();
    let dia: any = this.fromTimeStamp(manana).getDate();
    let hora: any = this.fromTimeStamp(manana).getMonth();
    let min: any = this.fromTimeStamp(manana).getMinutes();
    let sec: any = this.fromTimeStamp(manana).getSeconds();

    mes = mes + 1;

    if (mes < 10) mes = `0${mes}`;
    if (dia < 10) dia = `0${dia}`;
    if (min < 10) min = `0${min}`;
    if (hora < 10) hora = `0${hora}`;
    if (sec < 10) sec = `0${sec}`;

    return `${año}-${mes}-${dia} 00:00:01`;
  }

  /**
   *
   * @param time
   * @returns
   */
  toTimeStamp(time: string): number {
    let t = new Date(time);
    return t.getTime();
  }

  /**
   *
   * @param time
   * @returns
   */
  fromTimeStamp(time: number) {
    const date = new Date(time);
    return date;
  }

  /**
   *
   * @param hora
   * @param t
   * @returns
   */
  generateHoraAlarma(hora: string, t: number) {
    let horaT = this.toTimeStamp(hora);
    const tM = t * 60000;
    const horaAlarma = this.fromTimeStamp(horaT - tM);
    let h: any = horaAlarma.getHours();
    let m: any = horaAlarma.getMinutes();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    return `${h}:${m}`;
  }


  constructor() { }
}
