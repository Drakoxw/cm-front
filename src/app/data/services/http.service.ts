import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = environment.URLendP;

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.url}/clients/`)
  }

  getCliente(id:string){
    return this.http.get(`${this.url}/clients/${id}`)
  }

}
