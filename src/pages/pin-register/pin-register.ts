import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ViewController, AlertController} from 'ionic-angular';

import {PinPage} from "../pin/pin";
import {RestProvider} from "../../providers/rest/rest";
import {HowRegisterForgetPage} from "../how-register-forget/how-register-forget";

@IonicPage()
@Component({
    selector: "page-pin-register",
    templateUrl: "pin-register.html"
})
export class PinRegisterPage {
    action_title: any = {
        1: "CADASTRE SEU PIN",
        2: "DIGITE NOVAMENTE",
        3: "Por favor, insira o PIN"
    };
    action_id: number = 1; // 1 Register | 2 Confirm | 3 Entrar
    keyboard_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    pins_requireds: number = 6;
    pins_informed: any = [];
    pin1: any = [];
    pin2: any = [];

    data: any[];
    validacao: any;
    pareamento:any;
    user: any = {};
    userInfo: any = {};
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public modalCtrl: ModalController, public viewCtrl: ViewController,
                public alertCtrl: AlertController, public restProvider: RestProvider) {

    }

    ionViewDidLoad() {


        this.validacao = localStorage.getItem('qrcode');

        this.restProvider.login().subscribe(data => {
            this.user = data;

            console.log(this.user)


        }, onerror => {
            if(onerror.status === 403) {
           console.log('Error menssage , DEU CERTO'  + onerror)
                let alert = this.alertCtrl.create({
                    title: 'ERRO na Leitura do QR CODE',
                    subTitle: 'Usuário Não encontrado',
                    buttons: [
                        {text: 'Ok',
                            handler: () => {
                                localStorage.clear();
                                this.navCtrl.push(HowRegisterForgetPage);
                            }
                        },
                    ],


                });
                alert.present();
            }
        });

        if (this.validacao == ''){

            let alert = this.alertCtrl.create({
                title: 'ERRO',
                subTitle: 'Usuário Não encontrado',
                buttons: ['Fechar']

            });
            alert.present();

        }



    }

    getActionTitle() {
        return this.action_title[this.action_id];
    }

    getPins() {
        const pins = [];
        for (let pin = 0; pin <= this.pins_requireds - 1; pin++) {
            if (typeof this.pins_informed[pin] == "undefined") {
                pins[pin] = false;
            } else {
                pins[pin] = true;
            }
        }
        return pins;
    }


    addPin(pin) {
        let pins_length = (this.pins_informed || []).length;
        if (pins_length <= this.pins_requireds - 1) {
            this.pins_informed.push({pin: pin});
        }
        if (this.pins_informed.length == this.pins_requireds) {
            if (this.action_id == 2) {


                localStorage.setItem('Pin2', JSON.stringify(this.pins_informed));

                const pin1 = localStorage.getItem('Pin1')
                const pin2 = localStorage.getItem('Pin2')

                if (pin1 == pin2) {
                    //this.navCtrl.setRoot(TabsControllerPage); //Tava funcionando
                    this.navCtrl.push(PinPage)
                } else {
                    let alert = this.alertCtrl.create({
                        title: 'ERRO',
                        subTitle: 'O PIN não está igual ao registrado anteriormente',
                        buttons: ['Fechar']

                    });
                    alert.present();
                    this.pins_informed = [];
                }
            } else {

                localStorage.setItem('Pin1', JSON.stringify(this.pins_informed));


                this.action_id = 2;
                this.pins_informed = [];

            }
        }
    }


    removePin() {
        if (this.pins_informed.length > 0) {
            this.pins_informed.pop();
        }
    }


}
