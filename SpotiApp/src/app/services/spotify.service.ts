import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const URL_BUSQUEDA:string = "https://api.spotify.com/v1/search";
const URL_ARTISTA:string = "https://api.spotify.com/v1/artists";

@Injectable()
export class SpotifyService {
  token:string = "BQCk-NUkmBiHiTRFus63Mrc-xBEhyLtlkaN27F7bbCmrS8I2k8oL545dyPl2Jg35o03cexWav8YzdePhRS5NJA";
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

  getArtist( id:number ){
    let headers = new Headers();
    headers.append( 'authorization', `Bearer ${ this.token }` );
    let url = `${ URL_ARTISTA }/${ id }`;
    return this.http.get( url, { headers } )
            .map( res=>{
              console.log( res.json() );
              return res.json();
            });
  }

  getTop( id:number ){
    let headers = new Headers();
    headers.append( 'authorization', `Bearer ${ this.token }` );
    let url = `${ URL_ARTISTA }/${ id }/top-tracks?country=ES`;
    return this.http.get( url, { headers } )
            .map( res=>{
              console.log( res.json().tracks );
              return res.json().tracks;
            });
  }
}
