import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/index';

@Pipe({
  name: 'pendientes',
  pure: false //Si esta en false es un pipe inpuro y cada vez que detecte un cambio en "value" se volverá a aplicar el pipe
})
export class PendientesPipe implements PipeTransform {
  transform(value: Lista[], estado:boolean=true): Lista[] {
    return value.filter( el=>el.completado == !estado );
  }
}
