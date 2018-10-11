import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "page-send",
    templateUrl: "send.html"
})
export class SendPage {
    coin: number = 0;
    icons: any = {
        "0": "../../assets/img/icons/bitcoin.png",
        "1": "../../assets/img/icons/ethereum.png",
        "2": "../../assets/img/icons/brl.png"
    };

    //Var para setar os valores do form
    post: FormGroup;


    // URL da API
    API_URL: string = 'https://escritorio.inovatyon.com.br/api';
    transacao: any = {};
    mensagem:any;

    // Var para obter a API
    user: any = {};
    userInfo: any = {};
    carteiras: any = [{}];
    saldoBitcoin;
    any;
    qrcode: any;
    cotacao: any = {};
    cotacaoInfo: any = {};


    // BTC = 25115.94;
    conversao: number;




    constructor(public navCtrl: NavController,
                private restProvider: RestProvider,
                public http: HttpClient,
                public formBuilder: FormBuilder,
                public alertCtrl: AlertController) {

        this.post = this.formBuilder.group({
            // coin: ['', Validators.required],
            valor: ['', Validators.required],
            endereco: ['', Validators.required],
            // taxa: ['', Validators.required],
        });

        // this.conversao = this.post.valor * this.BTC ;
    }

    ionViewDidLoad() {

        //this.post.FormGroup.valor = 0.00;

        this.qrcode = localStorage.getItem('qrcode');

        this.restProvider.login().subscribe(data => {
            this.user = data;
            this.userInfo = this.user.data.mining_user_usuarioInfo;
            this.saldoBitcoin = this.userInfo.usuario.saldo_bitcoin;
            console.log('Saldo BTC', this.userInfo.usuario.saldo_bitcoin)

            console.log(this.userInfo.usuario.carteiras)
            this.carteiras = this.userInfo.usuario.carteiras;

            console.log(this.carteiras);

            this.cotacao = data;
            this.cotacaoInfo = this.cotacao.data.mining_public_financeiro_cotacao.cotacao.BTC;

            console.log(this.cotacaoInfo)


        })
    }

    EnviarPagamento() {

        console.log('cliquei')

        console.log(this.post.value)

        let data = {

            "mining/app/usuarioLogarPareamento": {"login": `${this.qrcode}`},

            "mining/financeiro/saque": {
                "valor": this.post.value.valor,
                "tipo_saque": "saldo_bitcoin",
                "carteira": this.post.value.endereco
            }

        }

        let alert = this.alertCtrl.create({
            title: 'Enviado',
            message: 'Valor Enviado ' + this.post.value.valor,
            subTitle: 'Para ' + this.post.value.endereco,
            buttons: ['Fechar']

        });



        //console.log(this.http.post(this.API_URL, {data}))
        this.http.post(this.API_URL, {data}).subscribe(data => {
            this.transacao = data;
            this.mensagem = this.transacao.data.mining_financeiro_saque;

            console.log(this.mensagem.status)
            console.log(this.mensagem.mensagem)

            if(this.mensagem.status == 0){
                let alert2 = this.alertCtrl.create({
                    title: 'Erro',
                    message:  this.mensagem.mensagem,
                    buttons: ['Fechar']



                });

                alert2.present();

                this.post.reset();
            }else{
                alert.present();

                this.post.reset();
            }

            // let valor = this.post.value.valor;
            // let endereco = this.post.value.endereco;

            console.log(data)


        }, onerror => {
            'Error menssage' + console.log(onerror)
        });



    }
}
