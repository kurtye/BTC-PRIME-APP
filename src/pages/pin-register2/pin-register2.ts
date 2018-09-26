import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

// import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { PinPage } from '../pin/pin';
import {PinRegisterPage} from "../pin-register/pin-register";



@IonicPage()
@Component({
  selector: "page-pin-register2",
  templateUrl: "pin-register2.html"
})
export class PinRegister2Page {
  action_title: any = {
    1: "CADASTRE SEU PIN",
    2: "DIGITE NOVAMENTE"
  };
  action_id: number = 2; // 1 Register | 2 Confirm
  keyboard_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pins_requireds: number = 6;
  pins_informed: any = [];
  checkPin: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public viewCtrl:ViewController,
              public modalCtrl:ModalController) {}


  ionViewDidLoad() {

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
      // console.log(this.pins_informed.push({ pin: pin }))
      // console.log(this.pins_informed)
      //Salvar PIN final

      //localStorage.setItem('Pin2',JSON.stringify(this.pins_informed));

    }

    console.log(this.pins_informed)
    console.log(this.pins_requireds)


    if (this.pins_informed.length == this.pins_requireds) {
      localStorage.setItem('Pin2', JSON.stringify(this.pins_informed));

      if (this.action_id == 2) {


        const pin1 = localStorage.getItem('Pin1')
        const pin2 = localStorage.getItem('Pin2')
        console.log(pin1)
        console.log(pin2)

        if (pin1 == pin2) {

          localStorage.setItem('skipPinRegister', 'true')

            this.navCtrl.setRoot(PinPage)


          // let pinModal = this.modalCtrl.create(PinPage);
          // pinModal.present();
          //
          // pinModal.onDidDismiss(data => {
          //   this.viewCtrl.dismiss();
          //   console.log(data);
          // });

          console.log('ionViewDidLoad ENTROU ModalpinPage');

        } else {
          let alert = this.alertCtrl.create({
            title: 'ERRO',
            subTitle: 'O PIN não está igual ao registrado anteriormente',
            buttons: ['Fechar']

          });
          alert.present();
          this.pins_informed = [];
        }

        console.log(this.pins_informed);

      } else {
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

  ionViewWillLeave(){
    this.viewCtrl.dismiss();
  }
}
