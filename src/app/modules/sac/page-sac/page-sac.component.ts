import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/data/models/clientes.models';

@Component({
  selector: 'app-page-sac',
  templateUrl: './page-sac.component.html',
  styleUrls: ['./page-sac.component.css']
})
export class PageSACComponent implements OnInit {
  opcionVer:number = 1;

  dataClientes?: ClientModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
