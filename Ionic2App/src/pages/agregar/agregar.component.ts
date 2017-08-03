import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/classes/index';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string;
  nombreItem:string;

  items:ListaItem[] = [];

  constructor( private alertCtrl: AlertController,
               private navCtrl:NavController,
               private _listaDeseos:ListaDeseosService ) {  }

  ngOnInit() {}

  agregar(){
    if( this.nombreItem.length == 0 ) return;

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";
  }

  borrarItem( idx:number ){
    if( this.items.length == 0) return;

    this.items.splice( idx, 1 );
  }

  guardarLista(){
    if( !this.nombreLista ){
      this.showAlert("Alerta", "No puede agregar listas sin nombres");
      return;
    };
    if( this.items.length == 0){
      this.showAlert("Alerta", "No puede agregar listas vacias");
      return;
    };

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    this._listaDeseos.agregarLista( lista );
    this.navCtrl.pop();
  }

  showAlert( title:string, subTitle:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
