import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from './heroe.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  lHeroe: any[] = [];

  constructor(
    private _heroes: HeroesService
  ) {
    this._heroes.getHeroes().subscribe(
      res => {
        // Sería muy pajero estar haciendo esto por cada lista que nos entrega Firebase
        // for(let key$ in res){
        //   let h = res[key$];
        //   h.key$ = key$;
        //   this.lHeroe.push(h);
        // }
        this.lHeroe = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
  }

}
