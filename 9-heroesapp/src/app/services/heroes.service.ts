import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/heroes/heroe.component';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireURL: string = 'https://heroesapp-30897.firebaseio.com//heroes.json';

  constructor(
    private http: Http
  ) { }

  nuevoHeroe( heroe:Heroe ){

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application-json'
    });

    return this.http.post( this.fireURL, body, {headers} ).pipe(
      map( res => { 
        console.log(res.json());
        return res.json();
      } )
    );

  }
}
