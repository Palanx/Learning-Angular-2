import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    let lista1:Lista = new Lista('Compras de supermercado');
    let lista2:Lista = new Lista('Jeugos que quiero');
    let lista3:Lista = new Lista('Cosas de la universidad');
    this.listas.push( lista1 );
    this.listas.push( lista2 );
    this.listas.push( lista3 );
   }
}
