import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespCitas } from 'src/app/data/models/respuestas.models';
import { HttpService } from 'src/app/data/services/http.service';
import { MicroTimeService } from 'src/app/data/services/micro-time.service';

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
  asignado: string;
  estado_cita: string = '1';
  nombre: string;
  motivo_cita: string;
  nota_cita: string;
  id_asignado: string;



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



  call(item){}
  agregarCita(){}

}
