import {Component} from '@angular/core';
import {IonicPage, IonicApp, NavController, NavParams,
        ModalController, AlertController, App, ViewController, LoadingController} from 'ionic-angular';

import {TabsControllerPage} from '../tabs-controller/tabs-controller';
import {HomePage} from "../home/home";
import {HowRegisterPinPage} from "../how-register-pin/how-register-pin";
import {PinRegisterPage} from "../pin-register/pin-register";

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class PinPage {

  action_id: number = 3;
  keyboard_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pins_requireds: number = 6;
  pins_informed: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              public app:App, public viewCtrl: ViewController,
              public loadingCtrl:LoadingController,
              public ionicApp: IonicApp, public appCtrl: App

              ) {

  }

  ionViewDidLoad(){
    let fisrtAcces = localStorage.getItem('fisrtAcces');

    if(fisrtAcces == 'true' ){
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Carregando...'
        });

        loading.present();

        setTimeout(() => {

            this.navCtrl.push(PinRegisterPage);
            localStorage.setItem('fisrtAcces', 'false');

        }, 1000);

        setTimeout(() => {
            loading.dismiss();
        }, 5000);



    }


  }



  getPins() {
    const pins = [];
    for (let pin = 0; pin <= (this.pins_requireds - 1); pin++) {
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

    if (pins_length == (this.pins_requireds - 1)) {
      //   if(pin2 == check){
      //   this.navCtrl.setRoot(TabsControllerPage);
      // }
    }

    if (pins_length <= (this.pins_requireds - 1)) {

      this.pins_informed.push({pin: pin});

    }

    if (this.pins_informed.length == this.pins_requireds) {
      localStorage.setItem('Check', JSON.stringify(this.pins_informed));
      if (this.action_id == 3) {


        const pin1 = localStorage.getItem('Pin1')
        const check = localStorage.getItem('Check')
        console.log(pin1)

        if (pin1 == check) {

            let loading = this.loadingCtrl.create({
              spinner: 'hide',
              content: 'Carregando...'
            });

            loading.present();

            setTimeout(() => {
              // this.navCtrl.push(TabsControllerPage)
              //this.navCtrl.push(HomePage, {})
              // this.viewCtrl.dismiss().then(_=>{
              //   let activePortal = this.ionicApp._modalPortal.getActive()
              //   if (activePortal) {
              //     activePortal.dismiss(); //can use another .then here
              //   }
              // });

              // this.viewCtrl.dismiss();
              //this.appCtrl.registerRootNav(this.navParams.get('page-tabs-controller'));


              this.navCtrl.setRoot(TabsControllerPage);

            }, 1000);

            setTimeout(() => {
              loading.dismiss();
            }, 5000);




          // this.loadingCtrl.create(){
          //
          //   this.navCtrl.insert (0, HomePage).then(()=>{
          //     this.navCtrl.popToRoot ()
          //
          //     this.loadingCtrl.dismiss();
          //   });
          // }

         // this.navCtrl.popAll()

          //this.navCtrl.push(TabsControllerPage);

          // goToHome(params){
          //   if (!params) params = {};
          //   this.navCtrl.setRoot(TabsControllerPage);
          // }

          // let currentIndex = this.navCtrl.getActive().index;
          // // this.navCtrl.push(TabsControllerPage).then(() => {
          //   this.navCtrl.remove(currentIndex, -1 );
          // // });


        } else {
          let alert = this.alertCtrl.create({
            title: 'ERRO',
            subTitle: 'PIN Incorreto',
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

  // ionViewDidLeave(){
  //   this.viewCtrl.dismiss();
  // }

  esqueciPin() {
    this.navCtrl.push(PinRegisterPage);
    localStorage.clear();
  }


  removePin() {
    if (this.pins_informed.length > 0) {
      this.pins_informed.pop();
    }
  }


}
