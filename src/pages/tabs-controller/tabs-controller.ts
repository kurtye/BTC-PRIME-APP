import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SendPage } from '../send/send';
import { TransactionsPage } from '../transactions/transactions';
import { ReceiverPage } from '../receiver/receiver';
import {PinPage} from "../pin/pin";
import {HowRegisterPinPage} from "../how-register-pin/how-register-pin";

@Component({
  selector: "page-tabs-controller",
  templateUrl: "tabs-controller.html"
})
export class TabsControllerPage {
  tab1Root: any = HomePage;
  tab2Root: any = SendPage;
  tab3Root: any = TransactionsPage;
  tab4Root: any = ReceiverPage;
  constructor(public navCtrl: NavController) {

    // let resetApp2 = localStorage.getItem('resetApp2');
    //
    // if(resetApp2 == 'true'){
    //   window.location.reload();
    //   localStorage.setItem('resetApp2','false');
    // }


  }


  goToHomePage(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }



}
