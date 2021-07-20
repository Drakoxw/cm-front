import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespDocumentos } from 'src/app/data/models/respuestas.models';
import { FuncionesComunesService } from 'src/app/data/services/funciones-comunes.service';
import { HttpSegundarioService } from 'src/app/data/services/http-segundario.service';
import { MicroTimeService } from 'src/app/data/services/micro-time.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  dataClienteDocument: RespDocumentos[];
  documentVencido: RespDocumentos[];

  idCliente:string;
  opcion: number = 1;
  guardar:boolean = false;
  classInputMod:string = 'custom-input-file col-md-6 col-sm-6 col-xs-6';
  hoy: string;

  //  data
  tipo_documento:string;
  vencimiento:string;
  descripcion:string;
  obj:any;


  constructor(private httpSerS: HttpSegundarioService,
              private route: ActivatedRoute,
              private timer: MicroTimeService,
              private funcServ: FuncionesComunesService)
  {
    this.idCliente = this.route.snapshot.params['id'];
    this.hoy = timer.getHoy().slice(0,10)
  }

  ngOnInit(): void {
    this.getDoc();
  }
  getDoc(){
    let id = this.idCliente;
    this.httpSerS.getDocumentos(id).subscribe(
      res => {
        if (!res.error) {
          this.dataClienteDocument = [];
          for (const key in res.data) {
            const el = res.data[key];
            this.dataClienteDocument.push(el)
          }
          this.documentVencido = this.dataClienteDocument.filter(x => x.vencimiento < this.hoy)
        }
      }
    )
  }

  checkDocumento(ev): void {
    if (ev) {
      const archivo = ev.target.files[0];
      this.funcServ.base64(archivo).then((img) => {
        this.obj = img['base']
      });
      this.classInputMod = 'custom-input-file adMod col-md-6 col-sm-6 col-xs-6';
      this.guardar = true;
    }
  }
  enviarDoc() {
    const id = this.idCliente;
    let data: Partial<RespDocumentos> = {
      descripcion: this.descripcion,
      //documento: this.obj,
      documento: 'esperando back',
      vencimiento: this.vencimiento? this.vencimiento: '2050/12/31',
      tipo_documento: this.tipo_documento
    }
    this.httpSerS.postDocumentos(id, data).subscribe(res => {
      if (res.error) {
        Swal.fire({
          title: 'ERROR!',
          icon: 'warning',
          text: 'Documento no ha podido ser guardado!',
          timer: 2300
        });
      } else {
        Swal.fire({
          title: 'Enviado',
          icon: 'success',
          text: 'Documento enviado correctamente!',
          timer: 1000
        });
        this.resetForm();
        this.getDoc();
      }
    });
  }

  resetForm(){
    this.tipo_documento= '';
    this.vencimiento= '';
    this.descripcion= '';
    this.guardar = false;
    this.obj = null;
    this.classInputMod = 'custom-input-file col-md-6 col-sm-6 col-xs-6';
  }

}
