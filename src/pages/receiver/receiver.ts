import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-receiver',
  templateUrl: 'receiver.html'
})
export class ReceiverPage {
  coin: number = 0;
  icons: any = {
    "0": "../../assets/img/icons/bitcoin.png",
    "1": "../../assets/img/icons/ethereum.png",
    "2": "../../assets/img/icons/brl.png"
  };

  constructor(public navCtrl: NavController) {
  }

}
