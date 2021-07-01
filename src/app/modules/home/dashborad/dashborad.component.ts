import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenI } from 'src/app/data/models/otros.moldes';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  token$: Observable<TokenI>;
  tok: TokenI;


  constructor(private AuthSer: AuthService) { }

  ngOnInit(): void {
    this.token$ = this.AuthSer.getToken$();
    this.token$.subscribe(token => this.tok = token);


    console.log('home', this.tok);

  }

}
