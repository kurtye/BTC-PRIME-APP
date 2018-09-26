import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from "../../providers/rest/rest";

import { ToastController} from "ionic-angular";
import { jsonpFactory} from "@angular/http/src/http_module";
import {TabsControllerPage} from "../tabs-controller/tabs-controller";
import {AppHeaderComponent} from "../../components/app-header/app-header";
import { Content } from 'ionic-angular';

import {HowRegisterPinPage} from "../how-register-pin/how-register-pin";
import {PinPage} from "../pin/pin";
import {PinRegisterPage} from "../pin-register/pin-register";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // @ViewChild(Nav) navCtrl: Nav;


  dates2: any[] = [
    {
      day: "02",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "03",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "04",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "05",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "06",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "07",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "08",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "09",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "10",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "11",
      month: "Nov",
      yaer: "2018",
      percent: 70
    },
    {
      day: "12",
      month: "Nov",
      yaer: "2018",
      percent: 60
    },
    {
      day: "13",
      month: "Nov",
      yaer: "2018",
      percent: 40
    }
  ];

  dates3: any[] = [
    {
      day: "02",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "03",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "04",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "05",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "06",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "07",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "08",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "09",
      month: "Nov",
      yaer: "2018",
      percent: 20
    },
    {
      day: "10",
      month: "Nov",
      yaer: "2018",
      percent: 50
    },
    {
      day: "11",
      month: "Nov",
      yaer: "2018",
      percent: 70
    },
    {
      day: "12",
      month: "Nov",
      yaer: "2018",
      percent: 100
    },
    {
      day: "13",
      month: "Nov",
      yaer: "2018",
      percent: 100
    }
  ];

  users: any;
  data:any[];
  user:any = {};
  userInfo:any = {};

  grupos: any ={};
  gurposArray: any ={};


  constructor(
             public navCtrl: NavController,
              private restProvider: RestProvider,
              public toast:ToastController,

  ) {



  }


  ionViewDidLoad(){

    // let resetApp = localStorage.getItem('resetAPP');
    //
    // if(resetApp == 'true'){
    //   this.navCtrl.push(PinPage);
    //   localStorage.setItem('resetAPP', 'false');
    //
    // }else {
    //   this.navCtrl.push(HowRegisterPinPage);
    // }






    let resetApp2 = localStorage.getItem('resetAPP2');

    if(resetApp2 == 'true'){
      window.location.reload();
      localStorage.setItem('resetAPP2','false');
    }

    //this.content.resize();

  this.restProvider.login().subscribe(data => {
    console.log(data)
    this.user = data;
    this.userInfo = this.user.data.mining_app_usuarioLogarPareamento;

    console.log('dados', this.user.data.mining_app_usuarioLogarPareamento)

  });
    this.restProvider.login().subscribe(data => {
      this.grupos = data;
      this.gurposArray = this.grupos.data.mining_app_grupos;

    })



    this.restProvider.user().subscribe(data =>{
     console.log(data)
      this.user = data;
   });


  }


  onTopCard(e) {
    console.log("A card has be tapad!");
  }



}

export class User {
  mining_app_usuarioLogar: Array<any>;
  comissao_2bit: number;
  id_tipo: number;
  indicador: string;
  session_id: string;
  status:number;
  usuario:string;

}
