import { Resposta } from './../../services/resposta';
import { InventarioService } from './../../services/inventario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { Inventario } from './../../services/inventario';

/**
 * Generated class for the Detalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  item: Inventario;
  res: Resposta;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private actionSheet:ActionSheetController, private service: InventarioService) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhe');
  }

  onEditar() {
    this.navCtrl.push("EditarPage", {"item": this.item});
  }

  onEliminar() {
    this.mensagem();    
  }

  onCancelar() {
    this.navCtrl.pop();
  }

  mensagem() {
    let msg = this.actionSheet.create({
      title: 'deseja realmente deletar este item?',
      buttons: [
        {
          text: 'sim',
          role: 'destructive', // tipo do botão que vai aparecer
          handler: () => this.service.deletar(this.item.id)
                                    .subscribe(
                                      resp => this.res = resp,
                                      err => this.res = err,
                                      () => console.log('finalizado delete do item') // colocar outra msg aqui!!!!
                                    )
        },
        {
          text: 'não',
          role: 'cancel',
          handler: () => console.log('cancelado')
        }
      ]
    });
    msg.present();
  }

}
