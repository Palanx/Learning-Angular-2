import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';
import { Lista } from '../../app/classes/index';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos:ListaDeseosService,
               private navCtrl:NavController ) {  }

  ngOnInit() {}

  irAgregar(){
    this.navCtrl.push( AgregarComponent );
  }

  verDetalle( lista:Lista ){
    this.navCtrl.push( DetalleComponent, { lista } );
  }
}
