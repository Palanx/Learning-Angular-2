import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';
import { Lista } from '../../app/classes/index';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor( private _listaDeseos:ListaDeseosService,
               private navCtrl:NavController) {  }

  ngOnInit() {}

  verDetalle( lista:Lista ){
    this.navCtrl.push( DetalleComponent, { lista } );
  }
}
