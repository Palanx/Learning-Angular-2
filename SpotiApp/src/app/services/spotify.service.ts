import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const URL_BUSQUEDA:string = "https://api.spotify.com/v1/search";
const URL_ARTISTA:string = "https://api.spotify.com/v1/artists";

@Injectable()
export class SpotifyService {
  token:string = "BQDd4swoe6NwTawmF5ZfJACKxwhjTzILeCVEBhKh03skk8fKdrNC_B_7uTEtjN1BgvMfw4lYv_YNOnjkR0_leQ";
  artistas:any[] = [];

  constructor( private http:Http ) { }

  getArtists( termino:string ){
    let headers = new Headers();
    headers.append( 'authorization', `Bearer ${ this.token }` );
    let url = `${ URL_BUSQUEDA }?q=${ termino }&type=artist`;
    return this.http.get( url, { headers } )
            .map( res=>{
              console.log( 'Response tal cual es' );
              console.log( res );

              console.log( 'Castea _body como json' );
              console.log( res.json() );

              this.artistas = res.json().artists.items;

              console.log( 'Esto carga desde un servicio' );
              console.log( this.artistas );

              //Si hay un suscripcion a este observables cuando llegue el response este lo devolvera (EJ: search.component.ts)
              return res.json().artists.items;
            });
  }

}
