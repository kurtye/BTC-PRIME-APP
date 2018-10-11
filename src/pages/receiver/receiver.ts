import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Clipboard} from "@ionic-native/clipboard";

@Component({
  selector: 'page-receiver',
  templateUrl: 'receiver.html'
})
export class ReceiverPage {

    qrData = null;
    createdCode = null;


    user: any = {};
    userInfo: any = {};
    carteiras: any = {};
    data:any = [{}];

    carteira: Array<Object>;
    saldoBitcoin;
    any;
    qrcode: any;

  coin: number = 0;
  icons: any = {
    "0": "../../assets/img/icons/bitcoin.png",
    "1": "../../assets/img/icons/ethereum.png",
    "2": "../../assets/img/icons/brl.png"
  };

  constructor(public navCtrl: NavController,
              public restProvider: RestProvider,
              public loadingCtrl: LoadingController,
              private clipboard: Clipboard) {

  }

   ionViewDidLoad(){


       let loading = this.loadingCtrl.create({
           spinner: 'ios',
           content: 'Carregando...'
       });

       loading.present();
           this.restProvider.login().subscribe(data => {
               this.user = data;
               this.userInfo = this.user.data.mining_user_usuarioInfo;

               console.log(this.userInfo.usuario.carteiras)
               //this.userInfo.usuario.carteiras.array[0].carteira;

               // this.carteiras = this.userInfo.usuario.carteiras.array[0].carteiras;

               // console.log(this.userInfo.usuario.carteiras.array[0].carteiras)

               this.data = this.userInfo.usuario.carteiras[0];
               console.log(data)

               console.log(this.data.carteira);

               //console.log(this.data);
               this.createdCode = this.data.carteira;

           });



       loading.dismiss();


   }

   copiar(){

      console.log('ok clicou')
       this.clipboard.copy(this.data.carteira);
   }





}
