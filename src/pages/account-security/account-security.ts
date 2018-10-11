import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: 'page-account-security',
  templateUrl: 'account-security.html'
})
export class AccountSecurityPage {

  nome:string;
  users: any;
  data:any[];
  user:any = {};
  userInfo:any = {};

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
  }

  ionViewDidLoad(){



    // this.restProvider.login().subscribe(data => {
    //   console.log(data)
    //   this.user = data;
    //   this.userInfo = this.user.data.mining_app_usuarioLogarPareamento;
    //
    //   console.log('dados', this.user.data.mining_app_usuarioLogarPareamento)
    //
    // })


      this.restProvider.login().subscribe(data => {
          console.log(data)

          //USERINFO DADOS DO USUARIO
          this.user = data;
          this.userInfo = this.user.data.mining_user_usuarioInfo;
          console.log('userInfo', this.userInfo.usuario)

          // this.events.publish('UpdateMenu', this.userInfo.usuario.nome, this.userInfo.usuario.id,
          //     this.userInfo.usuario.saldo_liberado, this.userInfo.usuario.saldo_comissao_venda);

          console.log('Event Teste : NOME', this.userInfo.usuario.nome)

          this.nome = this.userInfo.usuario.nome;

      });
  }




  
}
