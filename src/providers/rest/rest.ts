import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  API_URL: string = 'https://escritorio.inovatyon.com.br/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  user() {

    let data = {

    "mining/app/usuarioLogarPareamento":{"login":"Y29tZXRh"}

      // "mining/app/usuarioLogar": {
      //   "login": "cometa",
      //   "senha": "Qwerty1234#"
      //
      // },
  }
    return this.http.post(this.API_URL, {data}).map(res => res);
  }

  userInfo() {

    let data = {

      "mining/app/usuarioLogarPareamento":{"login":"Y29tZXRh"},
      "mining/user/usuarioInfo": {
        "dados_alterar": 1
      },

    }
    return this.http.post(this.API_URL, {data}).map(res => res);
  }

  login() {


    let data = {

      "mining/app/usuarioLogarPareamento":{"login":"Y29tZXRh"},

      "mining/user/usuarioInfo": {
        "dados_alterar": 1
      },

      "mining/user/grupo": {
        "usuario": "cometa"
      },
      "mining/user/grupoCotas": {
        "grupo": "IN-2048543098"
      },
      "mining/user/usuarioHistoricoTransacao": {},


      "mining/user/usuarioMinhasCompras": {},

      "mining/user/pedidoDetalhes": {
        "idPedido": "13021214995"
      }

    }


    // return this.http.post(this.API_URL, {data});

    return this.http.post(this.API_URL, {data}).map(res => res);

    // console.log(res)
    // .subscribe(response => console.log(response))

  }
}
