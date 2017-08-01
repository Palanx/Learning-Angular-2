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

  constructor( private activatedRoute:ActivatedRoute,
               private _spotifyService:SpotifyService ) { }

  ngOnInit() { //map() convierte observables
    this.activatedRoute.params
      .map( params => params['id'] )
      .subscribe( id =>{
        this._spotifyService.getArtist(id)
          .subscribe( data=> this.artista = data );

        this._spotifyService.getTop(id)
          .subscribe( data=> this.pistas = data );
        } );
  }

}
