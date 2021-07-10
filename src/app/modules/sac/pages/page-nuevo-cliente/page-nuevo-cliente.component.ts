import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-nuevo-cliente',
  templateUrl: './page-nuevo-cliente.component.html',
  styleUrls: ['./page-nuevo-cliente.component.css']
})
export class PageNuevoClienteComponent implements OnInit {
  opcionVer:number;

  constructor()
  {
    this.opcionVer = 3;
  }

  ngOnInit(): void {
  }

}
