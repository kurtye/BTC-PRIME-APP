import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AlertController } from "ionic-angular";

import { PinRegisterPage } from '../pin-register/pin-register';
import {QrCodeScanPage} from "../qr-code-scan/qr-code-scan";
import {TabsControllerPage} from "../tabs-controller/tabs-controller";
import {PinRegister2Page} from "../pin-register2/pin-register2";

/**
 * Generated class for the HowRegisterPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-how-register-pin",
  templateUrl: "how-register-pin.html"
})
export class HowRegisterPinPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HowRegisterPinPage");
  }

  goToRegisterPin() {

    localStorage.setItem('fisrtAcces', 'true');



      // let pinModal = this.modalCtrl.create(QrCodeScanPage);
      //               pinModal.present();
      //
      //               pinModal.onDidDismiss(data => {
      //                 this.viewCtrl.dismiss();
      //                 console.log(data);
      //               });


    this.navCtrl.push(QrCodeScanPage)

    // let currentIndex = this.navCtrl.getActive().index;
    // this.navCtrl.push(QrCodeScanPage).then(() => {
    // this.navCtrl.remove(currentIndex, -1 );
    // });


  }
}
