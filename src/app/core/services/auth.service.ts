import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../../data/constants/routes/api.routes';
import { TokenI, Usuario } from '../../data/models/otros.moldes';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: TokenI;

  constructor(private http: HttpClient) {}
  /**
   * Metodo de login en DB
   * @param usuario
   * @returns Token
   */
  login(usuario: Usuario) {
    const data = {
      user: usuario.user,
      password: usuario.password
    };
    return this.http.post<TokenI>(API_ROUTES.AUTH.LOGIN, data);
  }

}
