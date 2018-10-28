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
  isLoading:boolean = true;

  constructor(
    private _heroes: HeroesService,
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
        this.isLoading = false;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
  }

  eliminarHeroe(key$: string){
    this._heroes.deleteHeroe( key$ ).subscribe(
      res => {
        if(!!res){
          console.error(res);
        }else{
          delete this.lHeroe[key$]; //js para eliminar objetos
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
