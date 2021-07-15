import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';

@Component({
  selector: 'app-page-ver-cliente',
  templateUrl: './page-ver-cliente.component.html',
  styleUrls: ['./page-ver-cliente.component.css']
})
export class PageVerClienteComponent implements OnInit {

  name:string;
  id: string;

  formClient : Partial<ClientModel> = {
    id: null,
    nombres: '',
    apellidos: '',
    telmovil: '',
    telcasa: '',
    teltrabajo: '',
    telotro: '',
    asignado: 0,
    zipcode: 0,
    ciudad: '',
    estado: '',
    direccion: '',
    creadopor: 0,
    fecha_creacion: '0000-00-00',
    ocupacion: '',
    email: '',
    email2: '',
    nacimiento: '',
    status: 0,
  }

  constructor(private router: Router,
              private httpServ: HttpService,
              private activateRoute : ActivatedRoute)
  {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCliente();

  }

  /**
   * Trae todo los Clientes
   * metodo temporal requiere cambios
   */
  getCliente(){
    this.httpServ.getCliente(this.id).subscribe( res => {
      if (!res.error) {
        this.formClient = res.data;
        console.log(res.data);
      }
    });
  }

}
