import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-sac',
  templateUrl: './nav-bar-sac.component.html',
  styleUrls: ['./nav-bar-sac.component.css']
})
export class NavBarSACComponent implements OnInit {
  @Input() opcionVer!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
