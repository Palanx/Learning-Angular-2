import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const URL_BUSQUEDA:string = "https://api.spotify.com/v1/search";
const URL_ARTISTA:string = "https://api.spotify.com/v1/artists";

@Injectable()
export class SpotifyService {
  artistas:any[] = [];

  constructor( private http:Http ) { }

  getArtists( termino:string ){
    let url = `${ URL_BUSQUEDA }?q=${ termino }&type=artist`;
    return this.http.get( url )
            .map( res=>{
              console.log( res );
              this.artistas = res.json().artistas.items;
            });
  }

}
