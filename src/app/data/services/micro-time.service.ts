import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroTimeService {

  /**
   * Propiedad base de la libreria
   */
  hoy = new Date();

  /**
   * Retorna la fecha type string
   * @returns 'aaaa-mm-dd'
   */
  getFecha(): string {
    let mes: any = this.hoy.getMonth() + 1;
    let dia: any = this.hoy.getDate();
    if (mes < 10) mes = `0${mes}`;
    if (dia < 10) dia = `0${dia}`;
    return `${this.hoy.getFullYear()}-${mes}-${dia}`;
  }

  /**
   * Retorna la hora type string
   * @returns 'hh:mm:ss'
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
   * Retorna la fecha completa del inicio del dia
   * @returns 'aaaa-mm-dd 00:00:00'
   */
  getHoy(): string {
    return `${this.getFecha()} 00:00:00`;
  }


  /**
   * Retorna un string tipo fecha del inicio del dia de mañana
   * @returns 'aaaa-mm-dd 00:00:00'
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

    return `${año}-${mes}-${dia} 00:00:00`;
  }

  /**
   * Recibe una fecha tipo string:'aaaa-mm-dd 00:00:00' y lo vuelve formato TimeStamp
   * @param time Fecha: 'aaaa-mm-dd 00:00:00'
   * @returns Number: Fecha tipo TimeStamp: 1625170210000
   */
  toTimeStamp(time: string): number {
    let t = new Date(time);
    return t.getTime();
  }

  /**
   * Recibe una fecha formato TimeStamp y lo vuelve tipo string:'aaaa-mm-dd hh:mm:ss'
   * @param time Number: Fecha tipo TimeStamp: 1625170210000
   * @returns Fecha: 'aaaa-mm-dd hh:mm:ss'
   */
  fromTimeStamp(time: number) {
    const date = new Date(time);
    return date;
  }

  /**
   *  Genera las horas de las alarmas recibiendo un parametros de minutos
   * @param hora Hora tipo string: 'hh:mm:ss'
   * @param t Cantidad de tiempo en minutos para generar la alarma
   * @returns Hora tipo string: 'hh:mm:ss'
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


}
