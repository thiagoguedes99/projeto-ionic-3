import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  pass: string;
  logado: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  logar() {
    let usuario = {user: this.user, passsword: this.pass}

    this.navCtrl.push("TabsPage");
    //this.navCtrl.setRoot('TabsPage').then(resp => console.log(resp), er => console.log(er))
  }

}
