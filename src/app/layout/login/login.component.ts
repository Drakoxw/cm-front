import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass!: number;
  user!: string;

  constructor() { }

  ngOnInit(): void {
  }

  async codificar(){
    const buffer = new TextEncoder().encode(String(this.pass))
    const hash = await crypto.subtle.digest('SHA-256', buffer)
    //const digesHash = Array.from(new Uint8Array(hash))
    return hash.byteLength
  }

  autenticar(){
    console.log(this.codificar());
  }

}
