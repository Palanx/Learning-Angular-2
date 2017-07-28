import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private activatedRoute : ActivatedRoute,
               private _heroesService : HeroesService,
               private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      if(params['termino'] === undefined){
        this.heroes = this._heroesService.getHeroes();
      }else{
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
      }
    });
  }

  verHeroe( idx:number ){
    this.router.navigate(['/heroe', idx]);
  }
}
