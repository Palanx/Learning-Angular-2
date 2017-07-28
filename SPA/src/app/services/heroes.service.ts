import { Injectable } from '@angular/core';
import { HeroesArray } from 'assets/array/heroes.array';

@Injectable()
export class HeroesService {
  private heroes:Heroe[] = HeroesArray
  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx:number ):Heroe{
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{
    if(termino === "")
      return [];
    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if( nombre.indexOf( termino ) >= 0 ){
        heroesArr.push( heroe );
      }
    }

    return heroesArr;
  }

}
export interface Heroe{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}
