import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/index';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(value: Lista[], estado:boolean=false): Lista[] {
    return value.filter( el=>el.completado == estado );
  }
}
