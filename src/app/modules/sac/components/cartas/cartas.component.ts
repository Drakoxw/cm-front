import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {
  @Output() tituloEmit = new EventEmitter<string>()

  constructor() {  }

  ngOnInit(): void {

  }

}
