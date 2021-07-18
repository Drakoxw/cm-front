import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historial-crediticio',
  templateUrl: './historial-crediticio.component.html',
  styleUrls: ['./historial-crediticio.component.css']
})
export class HistorialCrediticioComponent implements OnInit {
  @Output() tituloEmit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

}
