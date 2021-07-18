import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cobros-pagos',
  templateUrl: './cobros-pagos.component.html',
  styleUrls: ['./cobros-pagos.component.css']
})
export class CobrosPagosComponent implements OnInit {
  @Output() tituloEmit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

}
