import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Tomás Muñiz";

  nombre2:string = "tOmáS mUñIz quIRoz";

  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  percent:number = 0.245;

  salario:number = 650000.25;

  heroe:any = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=>resolve('Llego la data!'), 3500 );
  } );

  fecha:Date = new Date(2017,6,31);

  videoID:string = "4xJoVCjBUco";

  pass:string = "infloglobosconelpoto";
  activar:boolean = true;
}
