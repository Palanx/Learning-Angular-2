import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const URL_BUSQUEDA:string = "https://api.spotify.com/v1/search";
const URL_ARTISTA:string = "https://api.spotify.com/v1/artists";

@Injectable()
export class SpotifyService {
  token:string = "BQDHxhU0GGnfY3Syi-ssg1ZhFnJCXeq_YTLo90z2dv4-S5MEOGlZIH3zrWfy-g15FImjgpoJ_rr1SIJuk-1YJw";
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
