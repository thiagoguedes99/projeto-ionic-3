import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPage } from './editar';

@NgModule({
  declarations: [
    EditarPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPage),
  ],
  exports: [
    EditarPage
  ]
})
export class EditarModule {}
