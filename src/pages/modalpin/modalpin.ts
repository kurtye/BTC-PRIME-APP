import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import {PinRegisterPage} from "../pin-register/pin-register";

/**
 * Generated class for the ModalpinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpin',
  templateUrl: 'modalpin.html',
})
export class ModalpinPage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController
  ) {


  }

  ionViewDidLoad() {


    console.log('INDEX 1 MODAL', this.navCtrl.getActive().index)

    // this.navCtrl.getActive().index;
    // this.navCtrl.remove(-1);
    let pinModal = this.modalCtrl.create(PinRegisterPage);
    pinModal.present();

      pinModal.onDidDismiss(data => {
        this.viewCtrl.dismiss();
        console.log(data);
      });

    console.log('ionViewDidLoad ENTROU ModalpinPage');




  }

  ionViewWillLeave(){
    this.viewCtrl.dismiss();
  }


}
