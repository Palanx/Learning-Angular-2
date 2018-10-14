import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{

  usuario:Object = {
    nombre: "Tomás",
    apellido: "Muñiz",
    correo: "test@gmail.com"
  }

  constructor() { }

  guardar( forma: NgForm ){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("valor",forma.form.value);
  }

}
