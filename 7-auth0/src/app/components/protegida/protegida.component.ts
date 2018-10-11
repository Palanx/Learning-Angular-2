import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(
    private _auth0: AuthService
  ) { }

  ngOnInit() {
    if (this._auth0.userProfile) {
      this.profile = this._auth0.userProfile;
    } else {
      this._auth0.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }

}
