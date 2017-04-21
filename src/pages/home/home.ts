import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: number [] = [];
  posicao = 0;

  constructor(public navCtrl: NavController) {
    this.iniciarLista();
  }

  iniciarLista() {
    for(let i=0; i < 15; i++) {
      this.lista.push(this.posicao);
      this.posicao ++;
      console.log(this.posicao);
    }
  }

}
