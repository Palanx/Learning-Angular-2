import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar:boolean = false;

  texto:string = "Texto de mierda que no seque poner :3";
  titulo:string = "-Tomás Muñiz";

  madres:string[] = ["Tu mamá 1","Tu mamá 2","Tu mamá 3","Tu mamá 4","Tu mamá 5","Tu mamá 6"];
}
