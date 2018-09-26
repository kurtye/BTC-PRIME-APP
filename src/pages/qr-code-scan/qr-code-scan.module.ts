import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodeScanPage } from './qr-code-scan';

@NgModule({
  declarations: [
    QrCodeScanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodeScanPage),
  ],
})
export class QrCodeScanPageModule {}
