import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespCitas } from 'src/app/data/models/respuestas.models';
import { HttpService } from 'src/app/data/services/http.service';
import { MicroTimeService } from 'src/app/data/services/micro-time.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  dataCitas: RespCitas[];
  hoy: string;
  idCliente: string;

  // data
  fecha_cita: string;
  hora_cita: string;
  estado_cita: string = '1';
  motivo_cita: string;
  nota_cita: string;



  constructor(private timer: MicroTimeService,
              private route: ActivatedRoute,
              private httpSer: HttpService)
  {
    this.hoy = `${this.timer.getFecha()}`;
    this.idCliente = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCitas();
  }

  getCitas(){
    let id = this.idCliente;
    this.httpSer.getAllCitasId(id).subscribe(r => {
      if (!r.error) {
        this.dataCitas = [];
        for (const key in r.data){
          const el = r.data[key];
          this.dataCitas.push(el)
        }
      }
    });
  }


  agregarCita(){
    const id = this.idCliente
    let data: Partial<RespCitas> = {
      id_asignado: '0',
      fechahora: `${this.fecha_cita} ${this.hora_cita}`,
      motivo: this.motivo_cita,
      notas: this.nota_cita,
      estado: '1',
    };
    this.httpSer.postCita(id, data).subscribe( r => {
      if (!r.error) {
        Swal.fire({
          title: 'Enviada',
          icon: 'success',
          text: 'Cita creada correctamente!',
          timer: 1500
        });
      } else {
        Swal.fire({
          title: 'ERROR!',
          icon: 'warning',
          text: 'Cita no guardada!',
          timer: 2300
        });
      }
    })
  }


}
