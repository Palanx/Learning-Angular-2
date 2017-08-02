import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor( private _listaDeseosService:ListaDeseosService ) {  }

  ngOnInit() {}
}
