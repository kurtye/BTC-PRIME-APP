import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {Events} from 'ionic-angular';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestProvider {

    API_URL: string = 'https://escritorio.inovatyon.com.br/api';
    qrcode: string;

    constructor(public http: HttpClient, public events: Events) {
        console.log('Hello RestProvider Provider');
    }


    user() {
        this.qrcode = localStorage.getItem('qrcode')
        console.log(this.qrcode)
        localStorage.setItem('teste', this.qrcode)
        let data = {

            "mining/app/usuarioLogarPareamento": {"login": `${this.qrcode}`},

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
            },

            // "mining/financeiro/saque":{
            //     "valor":1,"tipo_saque":"saldo_bitcoin","carteira":"caucucaucaca"
            // },

            "mining/public/financeiro/cotacao":{},


        }



        console.log("logged in");


        // return this.http.post(this.API_URL, {data}).map(res =>res);
        return this.http.post(this.API_URL, {data}).map((res: Response) => {
            if (res) {
                if (res.status === 201) {
                    return [{ status: res.status, json: res }]
                } else if (res.status === 200) {
                    return [{ status: res.status, json: res }]
                }
            }
        }).catch((error: any) => {
            if (error.status === 500) {
                return Observable.throw(new Error(error.status));
            }
            else if (error.status === 403) {
                console.log('errei aqui')
                return Observable.throw(new Error(error.status));
            }
            else if (error.status === 409) {
                return Observable.throw(new Error(error.status));
            }
            else if (error.status === 406) {
                return Observable.throw(new Error(error.status));
            }});
    };

    userInfo() {
        this.qrcode = localStorage.getItem('qrcode');
        let data = {

            "mining/app/usuarioLogarPareamento": {"login": `${this.qrcode}`},
            "mining/user/usuarioInfo": {
                "dados_alterar": 1
            },
        }

            return  this.http.post(this.API_URL, {data}).map(res => res);
    }

        login() {

            this.qrcode = localStorage.getItem('qrcode')
            console.log(this.qrcode)
            localStorage.setItem('teste', this.qrcode)
            let data = {

                "mining/app/usuarioLogarPareamento": {"login": `${this.qrcode}`},

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
                },

                // "mining/financeiro/saque":{
                //     "valor":1,"tipo_saque":"saldo_bitcoin","carteira":"caucucaucaca"
                // },

                "mining/public/financeiro/cotacao":{},


            }



            console.log("logged in");


            return this.http.post(this.API_URL, {data}).map(res =>res);


        }
    }


