import { Resposta } from './../../services/resposta';
import { InventarioService } from './../../services/inventario.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  form: FormGroup;
  res: Resposta;

  constructor(public navCtrl: NavController, private fb: FormBuilder,
              private service: InventarioService, private alerta: AlertController) {
    this.criarFormulario();

  }

  criarFormulario() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      produto: ['', Validators.required],
      existencia:['', Validators.required],
      preco: ['', Validators.required],
      provedor: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }

  adicionarInventario() {
    this.service.gravar(this.form.value)
                .subscribe(
                  rs => this.mostrarAlerta('resultado', rs.res),
                  err => this.res = err,
                  () => console.log(this.res)
                );
  }

  mostrarAlerta(titulo: string, subtiutlo: string) {
    let alerta = this.alerta.create({
      title: titulo,
      subTitle: subtiutlo,
      buttons: ['ok']
    });
    alerta.present();
    this.form.reset();
  }

}
