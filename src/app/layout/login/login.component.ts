import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenI, Usuario } from 'src/app/data/models/otros.moldes';
import { AuthService } from 'src/app/data/services/auth.service';
import * as CryptoJS  from 'crypto-js/sha256';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass!: string;
  user!: string;
  token!:any;

  constructor(private authServ: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  async codificar(){
  }

  autenticar(){
    let x = {
      password : CryptoJS(this.pass).toString(),
      user : this.user
    }
    console.log(x);

    const data: Usuario = x;
    this.authServ.login(data).subscribe(
      (res: TokenI) => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.authServ.token$.next(res);
        this.authServ.userLogin = true;
        this.router.navigate([''])
      }
    )
  }



}
