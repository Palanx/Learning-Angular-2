import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  termino:string = "";

  constructor( private activatedRoute : ActivatedRoute,
               private _heroesService : HeroesService,
               private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      if(params['termino'] === undefined){
        this.heroes = this._heroesService.getHeroes();
      }else{
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(this.termino);
      }
    });
  }

  verHeroe( nombre:string ){
    this.router.navigate(['/heroe', nombre]);
  }
}
