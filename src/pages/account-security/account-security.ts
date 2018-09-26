import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: 'page-account-security',
  templateUrl: 'account-security.html'
})
export class AccountSecurityPage {

  users: any;
  data:any[];
  user:any = {};
  userInfo:any = {};

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
  }

  ionViewDidLoad(){



    this.restProvider.login().subscribe(data => {
      console.log(data)
      this.user = data;
      this.userInfo = this.user.data.mining_app_usuarioLogarPareamento;

      console.log('dados', this.user.data.mining_app_usuarioLogarPareamento)

    })
  }


  
}
