import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  lista:Lista;

  constructor(
    private navCtrl:NavController,
    private navParams:NavParams,
    private alertCtrl: AlertController,
    private _listaDeseos:ListaDeseosService
  ){

    this.lista = this.navParams.get("lista");

  }

  ngOnInit() {}

  actualizarItem( item:ListaItem ){
    item.completado = !item.completado;

    this.lista.completado = this.lista.items.every( el=>el.completado );

    this._listaDeseos.actualizarData();
  }

  borrarItem(){
    let prompt = this.alertCtrl.create({
      title: 'Eliminar Lista',
      message: "¿Esta seguro que quiere eliminar la lista?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.eliminarLista( this.lista );
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }
}
