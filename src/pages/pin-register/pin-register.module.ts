import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinRegisterPage } from './pin-register';

@NgModule({
  declarations: [
    PinRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(PinRegisterPage),
  ],
})
export class PinRegisterPageModule {}
