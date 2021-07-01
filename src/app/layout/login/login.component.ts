import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenI, Usuario } from 'src/app/data/models/otros.moldes';
import { AuthService } from 'src/app/data/services/auth.service';
import * as CryptoJS from 'crypto-js/sha256';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass!: string;
  user!: string;
  token!: any;

  constructor(private authServ: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  autenticar() {
    let x = {
      password: CryptoJS(this.pass).toString(),
      user: this.user
    }
    Swal.showLoading();
    const data: Usuario = x;

    this.authServ.login(data).subscribe(
      (res: TokenI) => {

        this.authServ.token$.next(res);
        this.authServ.userLogin = true;
        console.log(res);

        Swal.fire({
          title: 'Autenticado',
          allowOutsideClick: false,
          icon: 'success',
          text: 'Autenticación correcta',
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          this.router.navigate(['/']);
        });
      }, err => {
        Swal.fire({
          title: 'Fallo',
          icon: 'error',
          text: 'Usuario o contraseña incorrecta',
        });
        this.pass = '';
        this.user = '';
      })

  }
}
