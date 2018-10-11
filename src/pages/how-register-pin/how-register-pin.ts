import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AlertController } from "ionic-angular";

import {QrCodeScanPage} from "../qr-code-scan/qr-code-scan";


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

    this.navCtrl.push(QrCodeScanPage)

  }
}
