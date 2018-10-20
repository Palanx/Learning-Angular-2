import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    //this.forma.setValue(this.usuario); //Si el objeto tiene la misma estructura que el FormGroup se setean los valores

    this.forma.controls.password2.setValidators([ //Cargar validadores luego de crear el FormControl
      Validators.required,
      this.noIgual.bind(this.forma) // Si no se hace el bind la funcion no puede apuntar a this.forma por que esta en otro scope
    ]);

    // Se dispara cada vez que un valor del formulario cambie, por ejemplo en un textbox se ejecuta por cada tecla que se presione
    this.forma.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );

    // Se dispara cada vez que el clontrol username sufra un cambio
    this.forma.controls.username.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );

    // Se dispara cada vez que el status del control cambia (Ej: VALID, INVALID)
    this.forma.controls.username.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
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

  existeUsuario(control: FormControl): Promise<any>|Observable<any>{
    let promesa = new Promise(
      ( resolve, reject ) => {
        setTimeout( () => {
          if( control.value.toLowerCase() === 'palanx'  ){
            resolve ( {existe:true} );
          }else{
            resolve ( null );
          }
        }, 3000 );
      }
    );
    return promesa;
  }

  guardarCambios(){
    console.log("value",  this.forma.value);

    //this.forma.reset( this.usuario ); // Resetea el form quedando pristine y lo deja limpio o le bindea un objeto como en este caso
    this.forma.controls.correo.setValue("Formulario enviado"); // Setear valores directamente al control
  }
}
