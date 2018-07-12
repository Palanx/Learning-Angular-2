import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'spotifyuri'
})
export class SpotifyuriPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){}

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( `${ value }` );
  }

}
