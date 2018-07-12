import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, arg1:string): string {
    return (!value) ? arg1 : value;
  }
}
