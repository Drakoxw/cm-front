import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from 'rxjs';
import { TokenI, Usuario } from '../models/otros.moldes';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token$ = new Subject<TokenI>();
  userLogin: Boolean;

  url = environment.URLendP;

  constructor(private http: HttpClient) { }

  login(usuario: Usuario) {
    const authdata = {
      user: usuario.user,
      password: usuario.password
    };
    return this.http.post(`${this.url}/auth`, authdata);
  }

  getToken$():Observable<TokenI | Object>{
    return this.token$.asObservable();
  }

}
