import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';

import {RestProvider} from "../../providers/rest/rest";

import {ToastController} from "ionic-angular";


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

    pareamento: any;

    users: any;
    data: any[];
    user: any = {};
    userInfo: any = {};

    grupos: any = {};
    gurposArray: any = {};

    saldoDisponivel: any = {};
    saldoLiberado: any = {};

    constructor(
        public navCtrl: NavController,
        private restProvider: RestProvider,
        public toast: ToastController,
        public events: Events
    ) {


    }


    ionViewDidLoad() {

        let resetApp2 = localStorage.getItem('resetAPP2');

        if (resetApp2 == 'true') {
            window.location.reload();
            localStorage.setItem('resetAPP2', 'false');
        }

        this.restProvider.login().subscribe(data => {
            console.log(data)
            this.user = data;


            //PAREAMENTO COM QR CODE E RETORNO DOS DADOS
            this.pareamento = this.user.data.mining_app_usuarioLogarPareamento;
            console.log('Pareamento', this.pareamento)

            //USERINFO DADOS DO USUARIO
            this.userInfo = this.user.data.mining_user_usuarioInfo;
            console.log('userInfo', this.userInfo.usuario)

            this.events.publish('UpdateMenu', this.userInfo.usuario.nome, this.userInfo.usuario.id,
                this.userInfo.usuario.saldo_liberado, this.userInfo.usuario.saldo_comissao_venda);

            console.log('Event Teste : ID', this.userInfo.usuario.id)
            console.log('Event Teste : NOME', this.userInfo.usuario.nome)
            console.log('Event Teste : Saldo', this.userInfo.usuario.saldo_liberado)
            console.log('Event Teste : Saldo', this.userInfo.usuario.saldo_comissao_venda)

            console.log('dados', this.user.data.mining_app_usuarioLogarPareamento)

        });
        this.restProvider.login().subscribe(data => {
            this.grupos = data;
            this.gurposArray = this.grupos.data.mining_app_grupos;

        })

        this.restProvider.user().subscribe(data => {
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
    status: number;
    usuario: string;

}
