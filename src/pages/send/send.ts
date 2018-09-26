import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: "page-send",
  templateUrl: "send.html"
})
export class SendPage {
  coin: number = 0;
  icons: any = {
    "0": "../../assets/img/icons/bitcoin.png",
    "1": "../../assets/img/icons/ethereum.png",
    "2": "../../assets/img/icons/brl.png"
  };
  user: any = {};
  userInfo: any = {};

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {}
  ionViewDidLoad() {
    this.restProvider.login().subscribe(data => {
      this.user = data;
      this.userInfo = this.user.data.mining_user_usuarioInfo;
      console.log(this.userInfo)

    })
  }
}
