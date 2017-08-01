import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any): string {
    return !value ? "assets/img/noimage.png" : ( value.length > 0 ? value[1].url : "assets/img/noimage.png" );
  }

}
