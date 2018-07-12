import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    this.cargarData();
  }

  actualizarData(){
    localStorage.setItem( "data", JSON.stringify( this.listas ) );
  }

  cargarData(){
    if( localStorage.getItem( "data" ) )
      this.listas = JSON.parse( localStorage.getItem( "data" ) );
  }

  eliminarLista( lista:Lista ){
    let idx = this.listas.findIndex( el=>el===lista );
    this.listas.splice( idx, 1 );
    this.actualizarData();
  }

  agregarLista( lista:Lista ){
    this.listas.push( lista );
    this.actualizarData();
  }
}
