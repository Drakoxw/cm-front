import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS  from 'crypto-js/sha256';
import { Usuario } from 'src/app/data/models/otros.moldes';
import { AuthService } from 'src/app/data/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass!: string;
  user!: string;
  token!:any;

  constructor(private authSer: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async codificar(){
  }

  autenticar(){
    let x = {
      password : CryptoJS(this.pass).toString(),
      user : this.user
    }
    const data: Usuario = x;
    console.log(data);

    this.authSer.login(data).subscribe(
      res => {
        this.token = res
        console.log(res);
        this.router.navigate([''])

      }
    )
  }

}
