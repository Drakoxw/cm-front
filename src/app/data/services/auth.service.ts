import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Usuario } from '../models/otros.moldes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.URLendP;

  constructor(private http: HttpClient) { }

  login(usuario: Usuario) {
    const authdata = {
      user: usuario.user,
      password: usuario.password
    };
    return this.http.post(`${this.url}/auth`, authdata);
  }


}
