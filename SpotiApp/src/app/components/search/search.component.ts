import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = "";
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
  }

  ngOnInit() {/*
    this._spotifyService.getArtists('metallica')
      .subscribe( data=>{
        //Solo en forma de ejemplo, cuando un se suscribe a un observable si este retorna data se guardara en "data" (yo le puse data pero se puede llamar hasta "pene")
        console.log( 'Esto carga desde un componente' );
        console.log( data );
      } );*/
  }

  buscarArtista() {
    this.loading = true;

    this._spotifyService.getArtists(this.termino)
      .subscribe( 
        () => {
          this.loading = false;
        },
        err => {
          this.loading = false;
        } );
  }

  mostrarArtista(event): void {
    alert(event.nomArtista);
  }

}
