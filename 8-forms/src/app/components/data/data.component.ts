import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidationErrors } from '@angular/forms';

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
    // pasatiempos: [
    //   // "Correr",
    //   // "Dormir",
    //   // "Comer"
    // ]
  };

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, this.noHerrera])
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    //this.forma.setValue(this.usuario); //Si el objeto tiene la misma estructura que el FormGroup se setean los valores

    this.forma.controls.password2.setValidators([ //Cargar validadores luego de crear el FormControl
      Validators.required,
      this.noIgual.bind(this.forma) // Si no se hace el bind la funcion no puede apuntar a this.forma por que esta en otro scope
    ]);
  }

  agregarPasatiempo(){
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  noHerrera(control: FormControl):{[s:string]:boolean}{
    if((control.value as string).toLowerCase() === "herrera"){
      return {
        noherrera:true
      }
    }
    return null;
  }

  noIgual(control: FormControl):ValidationErrors{
    let forma: any = this;
    if(control.value !== forma.controls.password1.value){
      return {
        noigual:true
      }
    }
    return null;
  }

  guardarCambios(){
    console.log("value",  this.forma.value);

    //this.forma.reset( this.usuario ); // Resetea el form quedando pristine y lo deja limpio o le bindea un objeto como en este caso
    this.forma.controls.correo.setValue("Formulario enviado"); // Setear valores directamente al control
  }
}
