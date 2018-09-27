import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SendPage } from '../send/send';
import { TransactionsPage } from '../transactions/transactions';
import { ReceiverPage } from '../receiver/receiver';


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

  }


  goToHomePage(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }



}
