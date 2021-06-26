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

  id: string;
  dataCliente: ClientModel;

  constructor(private router: Router,
              private httpServ: HttpService,
              private activateRoute : ActivatedRoute)
  {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCliente();

  }

  getCliente(){
    this.httpServ.getCliente(this.id).subscribe(
      (res: ClientModel) => {
        this.dataCliente = res;
        console.log(res);

      }

    )
  }

}
