import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface Heroe {
  key$?: string,
  nombre: string,
  casa: string,
  bio: string,
}

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @ViewChild('forma') forma:NgForm;
  heroe:Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  }
  nuevo:boolean = false;
  key$: string;

  constructor(
    private _heroe: HeroesService,
    private router: Router,
    private activatedReoute: ActivatedRoute
  ) {
    this.activatedReoute.params.subscribe(
      params => {
        console.log("params", params);
        if(params.id == 'nuevo')
          this.nuevo = true;
        else{
          this.nuevo = false;
          this.key$ = params.id;
        }
      }
    );
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.forma);

    if(this.nuevo)
      this.nuevoHeroe();
    else
      this.actualizarHeroe();
  }

  nuevoHeroe(){
    this._heroe.nuevoHeroe( this.heroe ).subscribe(
      res => {
        this.router.navigate(['/heroe', res.name]);
      },
      err => {
        console.error(err);
      }
    );
  }

  actualizarHeroe(){
    this._heroe.actualizarHeroe( this.heroe, this.key$ ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

}
