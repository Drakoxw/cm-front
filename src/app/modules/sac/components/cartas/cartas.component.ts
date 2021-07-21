import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespCart } from 'src/app/data/models/respuestas.models';
import { FuncionesComunesService } from 'src/app/data/services/funciones-comunes.service';
import { HttpSegundarioService } from 'src/app/data/services/http-segundario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {
  dataCartas: RespCart[];
  obj: string;

  // toggle
  opcion: number = 1;

  // data
  ronda: string;
  buro: string;
  fecha_envio: string
  cuentas: string;
  tracking: string;
  carta: string;

  //toggle
  guardar: boolean = false;
  classInputMod = 'custom-input-file col-md-6 col-sm-6 col-xs-6';
  idCliente: string;

  constructor(private httpSer: HttpSegundarioService,
              private route: ActivatedRoute,
              private funcServ: FuncionesComunesService)
  {
  this.idCliente = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCartas();
  }

  getCartas(){
    const id = this.idCliente;
    this.httpSer.getCartas(id).subscribe(r => {
      if (!r.error) {
        this.dataCartas = [];
        for (const key in r.data) {
          const el = r.data[key];
          this.dataCartas.push(el);
        }
      }
    })
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

  addCarta(){
    const id = this.idCliente;
    let data: Partial<RespCart> = {
      ronda: this.ronda,
      buro: this.buro,
      fecha_envio: this.fecha_envio,
      cuentas: this.cuentas,
      tracking: this.tracking,
      carta: `esperando Back`,
    };
    this.httpSer.postCartas(id, data).subscribe(r => {
      if (r.error) {
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
        this.getCartas();
      }
    })
  }

  resetForm(){
    this.ronda = '';
    this.buro = '';
    this.fecha_envio = '';
    this.cuentas = '';
    this.tracking = '';
    this.carta = '';
  }

}
