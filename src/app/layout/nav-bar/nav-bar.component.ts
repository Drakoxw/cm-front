import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  opcionVer:number;

  constructor() {
    this.opcionVer = 1;
   }

  ngOnInit(): void {
  }

}
