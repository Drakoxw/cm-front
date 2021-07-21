import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespReporteCred } from 'src/app/data/models/respuestas.models';
import { HttpSegundarioService } from 'src/app/data/services/http-segundario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-crediticio',
  templateUrl: './historial-crediticio.component.html',
  styleUrls: ['./historial-crediticio.component.css']
})
export class HistorialCrediticioComponent implements OnInit {
  dataHistorial: RespReporteCred[];
  idCliente: string;

  // data
  estado: string;
  razon: string;
  numero_cuenta: string;
  buro: string;
  acreedor: string;
  fecha: string;

  constructor(private httpSer: HttpSegundarioService,
              private route: ActivatedRoute,)
  {
    this.idCliente = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getHistorial();
  }

  getHistorial(){
    let id = this.idCliente;
    this.httpSer.getHistorCredi(id).subscribe(r => {
      if (!r.error) {
        this.dataHistorial = [];
        for (const key in r.data){
          const el = r.data[key];
          this.dataHistorial.push(el)
        }
      }
    });
  }

  reset(){
    this.estado = '';
    this.razon = '';
    this.numero_cuenta = '';
    this.buro = '';
    this.acreedor = '';
    this.fecha = '';
  }

  agregarReporte(){
    const id = this.idCliente;
    let data:Partial<RespReporteCred> = {
      estado: this.estado,
      buro: this.buro,
      acreedor: this.acreedor,
      fecha: this.fecha,
      razon: this.razon,
      carta_acreedor: 'esperando back',
      cuenta: this.numero_cuenta,
    }
    this.httpSer.postHistorCredi(id, data).subscribe(r => {
      if (!r.error) {
        Swal.fire({
          title: 'Enviada',
          icon: 'success',
          text: 'Cita creada correctamente!',
          timer: 1500
        });
        this.reset();
        this.getHistorial();
      } else {
        Swal.fire({
          title: 'ERROR!',
          icon: 'warning',
          text: 'Cita no guardada!',
          timer: 2300
        });
      }
    });
  }

}
