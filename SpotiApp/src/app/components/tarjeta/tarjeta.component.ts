import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  //@Input() items: any[] = [];
  @Input('items') artistas: any[] = [];
  @Output() pasaElArtista = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarDatoAPadre( nombre:string ){
    this.pasaElArtista.emit( { nomArtista:nombre } );
  }
}
