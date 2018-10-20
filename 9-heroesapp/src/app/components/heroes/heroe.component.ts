import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.forma);
  }

}
