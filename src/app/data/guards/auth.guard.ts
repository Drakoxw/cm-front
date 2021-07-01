import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  autenticacion: boolean;

  constructor(private router: Router) { }


  canActivate(): boolean {
    return true;
  }

}
