import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(
    private _auth0: AuthService
  ) { }

  login(){
    this._auth0.login();
  }

  logout(){
    this._auth0.logout();
  }

}
