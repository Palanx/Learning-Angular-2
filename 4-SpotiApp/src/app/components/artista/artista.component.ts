import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any[];
  loading:boolean;

  constructor( private activatedRoute:ActivatedRoute,
               private _spotifyService:SpotifyService ) { }

  ngOnInit() { //map() convierte observables
    this.loading = true;
    this.activatedRoute.params
      .map( params => params['id'] )
      .subscribe( id =>{
        this._spotifyService.getArtist(id)
          .subscribe( data=> {this.artista = data; this.loading = false;}, () => {this.loading = false;} );

        this._spotifyService.getTop(id)
          .subscribe( data=> {this.pistas = data; this.loading = false;}, () => {this.loading = false;} );
        } );
  }

}
