import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {
  @Output() tituloEmit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

}
