import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_PATHS } from 'src/app/data/constants/routes';
import { ClientModel } from 'src/app/data/models/clientes.models';
import { HttpService } from 'src/app/data/services/http.service';


@Component({
  selector: 'app-page-sac',
  templateUrl: './page-sac.component.html',
  styleUrls: ['./page-sac.component.css']
})
export class PageSACComponent implements OnInit {
  opcionVer:number;
  dataClientes: ClientModel[];

  constructor(private httpServ: HttpService,
              private router : Router)
  {
    this.opcionVer = 1;
  }

  ngOnInit(): void {
    this.getClientes();
  }

  /**
   * Trae todo los Clientes
   * metodo temporal requiere cambios
   */
  getClientes(){
    this.httpServ.getAllClientes().subscribe(res => {
      if (!res.error) {
        let x = [];
        for (const key in res) {
          const el = res[key];
          x.push(el);
        }
        this.dataClientes = x;
      }
    });
  }

  /**
   * Metodo de redireción a VerClientes/id
   * @param id string
   */
  setId(id:string){
    this.router.navigateByUrl(`${ROUTES_PATHS.CLIENT}/${id}`);
  }

}
