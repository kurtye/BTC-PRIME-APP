import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MiningPage } from '../pages/mining/mining';
import { MoneyInAccountPage } from '../pages/money-in-account/money-in-account';
import { ExchangePage } from '../pages/exchange/exchange';
import { WalletPage } from '../pages/wallet/wallet';
import { AccountSecurityPage } from '../pages/account-security/account-security';
import { PinPage } from '../pages/pin/pin';
import { PinRegisterPage } from '../pages/pin-register/pin-register';
import { HowRegisterPinPage } from "../pages/how-register-pin/how-register-pin";
import { SendPage } from "../pages/send/send";
import { ReceiverPage } from "../pages/receiver/receiver";
import { BuyPage } from "../pages/buy/buy";
import { SellPage } from "../pages/sell/sell";
import { OffersPage } from "../pages/offers/offers";
import { IncreaseProcessingPage } from "../pages/increase-processing/increase-processing";
import { StylePage } from "../pages/style/style";

import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { RestProvider } from "../providers/rest/rest";

import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = TabsControllerPage;

  submenu_active: string = "";

  users: any;
  data:any[];

  login: any = {};
  loginInfo: any = {};

  user:any = {};
  userInfo:any = {};
  userDetails = {};

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    restProvider: RestProvider
  ) {
    //this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'forward' });;
    // this.navCtrl.root = TabsControllerPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      splashScreen.hide();
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#ffffff');

        restProvider.userInfo().subscribe(data => {
        console.log(data)
        this.user = data;
        this.userInfo = this.user.data.mining_user_usuarioInfo;

        console.log('userDetails', this.userInfo)
          // this.navCtrl.push(HowRegisterPinPage);
      });

        // let resetApp2 = localStorage.getItem('resetApp2');
        //
        // if (resetApp2 == 'false'){
        //   this.navCtrl.setRoot(TabsControllerPage);
        // }else {
        //   this.navCtrl.push(HowRegisterPinPage);
        // }

      let fisrtAcces = localStorage.getItem('fisrtAcces');

     if(fisrtAcces != 'false'){

         this.navCtrl.push(HowRegisterPinPage);
     }

     else {
       //this.navCtrl.setRoot(HowRegisterPinPage);
         this.navCtrl.setRoot(PinPage);
     }

    });


  }





  closed(e) {
    this.submenu_active = "";
  }

  showSubMenu(menu) {
    if (this.submenu_active == menu) {
      this.submenu_active = "";
    } else {
      this.submenu_active = menu;
    }
  }

  goToMining(params) {
    if (!params) params = {};
    this.navCtrl.push(MiningPage);
  }
  goToMoneyInAccount(params) {
    if (!params) params = {};
    this.navCtrl.push(MoneyInAccountPage);
  }
  goToExchange(params) {
    if (!params) params = {};
    this.navCtrl.push(ExchangePage);
  }
  goToWallet(params) {
    if (!params) params = {};
    this.navCtrl.push(WalletPage);
  }
  goToAccountSecurity(params) {
    if (!params) params = {};
    this.navCtrl.push(AccountSecurityPage);
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  goToPin(params) {
    if (!params) params = {};
    this.navCtrl.push(PinPage);
  }
  goToPinRegister(params) {
    if (!params) params = {};
    this.navCtrl.push(PinRegisterPage);
  }
  goToReceiver(params) {
    if (!params) params = {};
    this.navCtrl.push(ReceiverPage);
  }
  goToSend(params) {
    if (!params) params = {};
    this.navCtrl.push(SendPage);
  }
  goToBuy(params) {
    if (!params) params = {};
    this.navCtrl.push(BuyPage);
  }
  goToSell(params) {
    if (!params) params = {};
    this.navCtrl.push(SellPage);
  }
  goToOffers(params) {
    if (!params) params = {};
    this.navCtrl.push(OffersPage);
  }
  goToIncreaseProcessing(params) {
    if (!params) params = {};
    this.navCtrl.push(IncreaseProcessingPage);
  }
  goToStyle(params) {
    if (!params) params = {};
    this.navCtrl.push(StylePage);
  }

  goToHomePage(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
