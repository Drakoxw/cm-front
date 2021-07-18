import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  @Output() tituloEmit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

}
