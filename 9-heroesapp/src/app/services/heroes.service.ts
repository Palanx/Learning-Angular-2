import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/heroes/heroe.component';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireURL: string = 'https://heroesapp-30897.firebaseio.com/heroes';

  constructor(
    private http: Http
  ) { }

  nuevoHeroe( heroe:Heroe ){

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application-json'
    });
    let url = `${this.fireURL}.json`;

    return this.http.post( url, body, {headers} ).pipe(
      map( res => { 
        console.log("post", res.json());
        return res.json();
      } )
    );

  }

  actualizarHeroe( heroe:Heroe, key$: string ){

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application-json'
    });
    let url = `${this.fireURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(
      map( res => { 
        console.log("put", res.json());
        return res.json();
      } )
    );

  }

  getHeroe( key$: string ){

    let headers = new Headers({
      'Content-Type':'application-json'
    });
    let url = `${this.fireURL}/${key$}.json`;

    return this.http.get( url, {headers} ).pipe(
      map( res => { 
        console.log("get", res.json());
        return res.json();
      } )
    );

  }

  deleteHeroe( key$: string ){

    let headers = new Headers({
      'Content-Type':'application-json'
    });
    let url = `${this.fireURL}/${key$}.json`;

    return this.http.delete( url, {headers} ).pipe(
      map( res => { 
        console.log("delete", res.json());
        return res.json();
      } )
    );

  }

  getHeroes(){

    let headers = new Headers({
      'Content-Type':'application-json'
    });
    let url = `${this.fireURL}.json`;

    return this.http.get( url, {headers} ).pipe(
      map( res => { 
        console.log("get", res.json());
        return res.json();
      } )
    );

  }
}
