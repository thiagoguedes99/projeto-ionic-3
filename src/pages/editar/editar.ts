import { Resposta } from './../../services/resposta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Inventario } from './../../services/inventario';
import { InventarioService } from './../../services/inventario.service';

/**
 * Generated class for the Editar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  
  item: Inventario;
  res: Resposta;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: InventarioService) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editar');
  }

  onSalvar() {
    this.service.atualizar(this.item)
                .subscribe(
                  resp => this.res = resp,
                  err => this.res = err,
                  () => this.navCtrl.popToRoot()
                );
  }

  onCancelar() {
    this.navCtrl.pop();
  }

}
