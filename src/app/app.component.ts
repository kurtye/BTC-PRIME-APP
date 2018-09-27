import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MiningPage} from '../pages/mining/mining';
import {MoneyInAccountPage} from '../pages/money-in-account/money-in-account';
import {ExchangePage} from '../pages/exchange/exchange';
import {WalletPage} from '../pages/wallet/wallet';
import {AccountSecurityPage} from '../pages/account-security/account-security';
import {PinPage} from '../pages/pin/pin';
import {PinRegisterPage} from '../pages/pin-register/pin-register';
import {HowRegisterPinPage} from "../pages/how-register-pin/how-register-pin";
import {SendPage} from "../pages/send/send";
import {ReceiverPage} from "../pages/receiver/receiver";
import {BuyPage} from "../pages/buy/buy";
import {SellPage} from "../pages/sell/sell";
import {OffersPage} from "../pages/offers/offers";
import {IncreaseProcessingPage} from "../pages/increase-processing/increase-processing";
import {StylePage} from "../pages/style/style";

import {TabsControllerPage} from '../pages/tabs-controller/tabs-controller';
import {RestProvider} from "../providers/rest/rest";

import {HomePage} from "../pages/home/home";
import {Events} from 'ionic-angular';

@Component({
    templateUrl: "app.html"
})
export class MyApp {
    @ViewChild(Nav) navCtrl: Nav;
    rootPage: any;

    submenu_active: string = "";

    users: any;
    data: any[];

    login: any = {};
    loginInfo: any = {};

    user: any = {};
    userInfo: any = {};
    userDetails = {};
    saldo: any = {};

    saldoDisponivel: any = {};
    saldoLiberado: any = {};

    qrcode: string;

    //DADOS DO EVENT PARA O MENU LATERAL
    usuarioNome: string;
    usuarioId: any;
    usuarioSaldoL: any;
    usuarioSaldoV: any;


    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        restProvider: RestProvider,
        events: Events,
    ) {

        events.subscribe('UpdateMenu', (nome, id, saldoL, saldoV) => {


            console.log('Chegou', nome)
            console.log('ID MENU', id)
            console.log('saldoL', saldoL)
            console.log('saldoV', saldoV)
            this.usuarioNome = nome;
            this.usuarioId = id;
            this.usuarioSaldoL = saldoL;
            this.usuarioSaldoV = saldoV;


            console.log('Passou', this.userInfo)
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            splashScreen.hide();
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#ffffff');


            let fisrtAcces = localStorage.getItem('fisrtAcces');

            if (fisrtAcces != 'false') {

                this.navCtrl.push(HowRegisterPinPage);
            }

            else {

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
