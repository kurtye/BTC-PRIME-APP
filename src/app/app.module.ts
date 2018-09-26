import { NgModule, ErrorHandler, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SendPage } from '../pages/send/send';
import { TransactionsPage } from '../pages/transactions/transactions';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ReceiverPage } from '../pages/receiver/receiver';
import { AccountSecurityPage } from '../pages/account-security/account-security';
import { MiningPage } from '../pages/mining/mining';
import { MoneyInAccountPage } from '../pages/money-in-account/money-in-account';
import { ExchangePage } from '../pages/exchange/exchange';
import { WalletPage } from '../pages/wallet/wallet';
import { PinPage } from "../pages/pin/pin";
import { PinRegisterPage } from "../pages/pin-register/pin-register";
import { HowRegisterPinPage } from "../pages/how-register-pin/how-register-pin";
import { BuyPage } from "../pages/buy/buy";
import { SellPage } from "../pages/sell/sell";
import { OffersPage } from "../pages/offers/offers";
import { IncreaseProcessingPage } from "../pages/increase-processing/increase-processing";
import { StylePage } from "../pages/style/style";
import {PinRegister2Page} from "../pages/pin-register2/pin-register2"

import { DoughnutChartComponent } from "../components/doughnut-chart/doughnut-chart";
import { CardComponent } from "../components/card/card";
import { Card2Component } from "../components/card2/card2";
import { GroupComponent } from "../components/group/group";
import { AppHeaderComponent } from "../components/app-header/app-header";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChartsModule } from "ng2-charts";
import { Camera } from "@ionic-native/camera";
import { RestProvider } from '../providers/rest/rest';
import { UsersProvider } from '../providers/users/users';
import { QRScanner } from '@ionic-native/qr-scanner';
import { QrCodeScanPage } from "../pages/qr-code-scan/qr-code-scan";
import { QrScanProvider } from '../providers/qr-scan/qr-scan';
import { ModalpinPage } from '../pages/modalpin/modalpin';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SendPage,
    TransactionsPage,
    TabsControllerPage,
    ReceiverPage,
    AccountSecurityPage,
    MiningPage,
    MoneyInAccountPage,
    ExchangePage,
    WalletPage,
    DoughnutChartComponent,
    CardComponent,
    GroupComponent,
    Card2Component,
    AppHeaderComponent,
    PinPage,
    PinRegisterPage,
    HowRegisterPinPage,
    BuyPage,
    SellPage,
    OffersPage,
    IncreaseProcessingPage,
    StylePage,
    QrCodeScanPage,
    PinRegister2Page,
    ModalpinPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Septembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      monthShortNames: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Out",
        "Nov",
        "Dez"
      ]
    }),
    HttpClientModule,
    ChartsModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SendPage,
    TransactionsPage,
    TabsControllerPage,
    ReceiverPage,
    AccountSecurityPage,
    MiningPage,
    MoneyInAccountPage,
    ExchangePage,
    WalletPage,
    DoughnutChartComponent,
    CardComponent,
    GroupComponent,
    Card2Component,
    AppHeaderComponent,
    PinPage,
    PinRegisterPage,
    HowRegisterPinPage,
    BuyPage,
    SellPage,
    OffersPage,
    IncreaseProcessingPage,
    StylePage,
    QrCodeScanPage,
    PinRegister2Page,
    ModalpinPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: LOCALE_ID,
      useValue: "pt"
    },
    RestProvider,
    UsersProvider,
    QRScanner,
    QrScanProvider
  ]
})
export class AppModule {}
