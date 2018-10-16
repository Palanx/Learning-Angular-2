import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: "Tomás",
      apellido: "Muñiz"
    },
    correo: "test@test.com"
  };

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });

    this.forma.setValue(this.usuario); //Si el objeto tiene la misma estructura que el FormGroup se setean los valores
  }


  guardarCambios(){
    console.log("value",  this.forma.value);

    this.forma.reset( this.usuario ); // Resetea el form quedando pristine y lo deja limpio o le bindea un objeto como en este caso
    this.forma.controls.correo.setValue("Formulario enviado"); // Setear valores directamente al control
  }
}
