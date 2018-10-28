import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false //Tiene que estar pendiente del ciclo de acmbios que haga Angular si no por ej al eliminar un elemento del arreglo tirará error por que no encuentra un elemento
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];

    for(let key in value){
      keys.push(key);
    }

    return keys;
  }

}
