import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-pagos-sac',
  templateUrl: './page-pagos-sac.component.html',
  styleUrls: ['./page-pagos-sac.component.css']
})
export class PagePagosSACComponent implements OnInit {
  opcionVer:number;

  constructor()
  {
    this.opcionVer = 2;
  }

  ngOnInit(): void {
  }

}
