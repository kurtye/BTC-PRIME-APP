import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ViewController, AlertController} from 'ionic-angular';
import {PinRegister2Page} from "../pin-register2/pin-register2";
import {TabsControllerPage} from "../tabs-controller/tabs-controller";
import {ModalpinPage} from "../modalpin/modalpin";
import {PinPage} from "../pin/pin";
import {HomePage} from "../home/home";


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
  pin1:any =[];
  pin2: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, public viewCtrl: ViewController,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {


  }
    getActionTitle()
    {
      return this.action_title[this.action_id];
    }

    getPins()
    {
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
            this.pins_informed.push({ pin: pin });
        }
        if (this.pins_informed.length == this.pins_requireds) {
            if (this.action_id == 2) {


               localStorage.setItem('Pin2', JSON.stringify(this.pins_informed));

                const pin1 = localStorage.getItem('Pin1')
                const pin2 = localStorage.getItem('Pin2')

                if(pin1 == pin2){
                    //this.navCtrl.setRoot(TabsControllerPage); //Tava funcionando
                    this.navCtrl.push(PinPage)
                }else{
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


    // addPin(pin)
    // {
    //
    //   let pins_length = (this.pins_informed || []).length;
    //   // if (pins_length <= this.pins_requireds - 1) {
    //   //   localStorage.setItem('Pin1', JSON.stringify(this.pins_informed));
    //   //   this.pins_informed.push({ pin: pin });
    //   // }
    //   // if (this.pins_informed.length == this.pins_requireds) {
    //   //   if (this.action_id == 2) {
    //   //     localStorage.setItem('Pin2', JSON.stringify(this.pins_informed));
    //   //     this.navCtrl.push(PinPage);
    //   //   } if(this.action_id == 3){
    //   //
    //   //   } else {
    //   //     this.action_id = 2;
    //   //     this.pins_informed = [];
    //   //   }
    //   // }
    //
    //
    //   if (this.pins_informed.length == this.pins_requireds) {
    //
    //        if (pins_length <= this.pins_requireds - 1) {
    //
    //
    //       }
    //       if (this.pins_informed.length == this.pins_requireds) {
    //         if(this.action_id == 1){
    //             const pin1 = localStorage.setItem('Pin1', JSON.stringify(this.pins_informed));
    //             this.pins_informed.push({ pin: pin });
    //             this.action_id = 2;
    //         }
    //         if (this.action_id == 2) {
    //             const pin1 = localStorage.setItem('Pin2', JSON.stringify(this.pins_informed));
    //             this.pins_informed.push({ pin: pin });
    //             this.action_id = 3;
    //         }
    //
    //         } if(this.action_id == 3) {
    //
    //           localStorage.setItem('Pin3', JSON.stringify(this.pins_informed));
    //           this.navCtrl.push(TabsControllerPage);
    //               // let pinModal = this.modalCtrl.create(PinRegister2Page);
    //               // pinModal.present();
    //               //
    //               // pinModal.onDidDismiss(data => {
    //               //   this.viewCtrl.dismiss();
    //               //   console.log(data);
    //               // });
    //           }
    //
    //   }
    // }


    removePin()
    {
      if (this.pins_informed.length > 0) {
        this.pins_informed.pop();
      }
    }


}
