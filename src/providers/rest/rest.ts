import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {Events} from 'ionic-angular';


@Injectable()
export class RestProvider {

    API_URL: string = 'https://escritorio.inovatyon.com.br/api';
    qrcode: string;

    constructor(public http: HttpClient, public events: Events) {
        console.log('Hello RestProvider Provider');
    }


    user() {
        this.qrcode = localStorage.getItem('qrcode')
        let data = {

            "mining/app/usuarioLogarPareamento": {"login": `${this.qrcode}`}

        }
        return this.http.post(this.API_URL, {data}).map(res => res);
    }

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
                }


            }
            console.log("logged in");


            return this.http.post(this.API_URL, {data}).map(res => res);

        }
    }


