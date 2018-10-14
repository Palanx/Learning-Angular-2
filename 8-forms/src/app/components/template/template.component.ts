import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }

  guardar( forma: NgForm ){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("valor",forma.form.value);
  }

}
