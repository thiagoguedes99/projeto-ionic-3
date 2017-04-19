import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InventarioService } from './../../services/inventario.service';
import { Inventario } from './../../services/inventario';


/**
 * Generated class for the Inventario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html',
})
export class InventarioPage {

  lista: Inventario [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: InventarioService) {
    service.getInventario()
           .subscribe(
             resp => this.lista = resp,
             err => console.log(err),
             () => console.log(this.lista)
           );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inventario');
  }

  goDetalhePage(item: Inventario) {
    this.navCtrl.push("DetalhePage", {"item": item});
    //this.navCtrl.push("DetalhePage");    
  }

}
