import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{

  forma: FormGroup;

  constructor() { 
    this.forma = new FormGroup({
      'nombre': new FormControl('Tomás'),
      'apellido': new FormControl(''),
      'correo': new FormControl('')
    });
  }


  guardarCambios(){
    console.log("value",  this.forma.value);
  }
}
