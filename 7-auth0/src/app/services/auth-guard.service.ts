import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private _auth0: AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(next);
    console.log(state);
    if(this._auth0.isAuthenticated()){
      console.log("Paso el guard");
      return true;
    }else{
      console.error("Bloqueado por el guard");
      return false;
    }
      
  }
}
