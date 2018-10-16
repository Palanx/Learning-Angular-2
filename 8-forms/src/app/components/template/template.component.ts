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
    correo: null,
    pais: "",
    sexo: null,
    acepta: null
  }

  lPais: Object[] = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    },
    {
      codigo: "CL",
      nombre: "Chile"
    }
  ];

  lSexo: Object[] = [
    {
      codigo: "m",
      nombre: "Masculino"
    },
    {
      codigo: "f",
      nombre: "Femenino"
    },
    {
      codigo: "s",
      nombre: "Sin Definir"
    }
  ];

  constructor() { }

  guardar( forma: NgForm ){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("valor",forma.form.value);
  }

}
