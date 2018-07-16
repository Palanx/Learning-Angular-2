import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="color">
      Hola mundo... esta es una etiqueta
    </p>

    <p [style.fontSize.px]="size">
      Hola mundo... esta es otra etiqueta
    </p>

    <button class="btn btn-primary" (click)="size = size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size:number = 20;
  color:any = {'color':'red'};

  constructor() { }

  ngOnInit() {
  }

}
