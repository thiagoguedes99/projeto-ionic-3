import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EliminarPage } from './eliminar';

@NgModule({
  declarations: [
    EliminarPage,
  ],
  imports: [
    IonicPageModule.forChild(EliminarPage),
  ],
  exports: [
    EliminarPage
  ]
})
export class EliminarModule {}
