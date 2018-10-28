import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

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

  constructor(
    private _heroe: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.forma);

    this._heroe.nuevoHeroe( this.heroe ).subscribe(
      res => {
        this.router.navigate(['/heroe', res.name]);
      },
      err => {
        console.error(err);
      }
    );
  }

}
