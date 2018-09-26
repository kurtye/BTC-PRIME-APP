import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController, ModalController} from 'ionic-angular';

import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";
import {PinRegisterPage} from "../pin-register/pin-register";

import {PinPage} from "../pin/pin";
import {ModalpinPage} from "../modalpin/modalpin";
import {TabsControllerPage} from "../tabs-controller/tabs-controller";

/**
 * Generated class for the QrCodeScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-qr-code-scan",
  templateUrl: "qr-code-scan.html"
})
export class QrCodeScanPage {

  private isBackMode: boolean = true;
  private isFlashLightOn: boolean = false;
  private scanSub: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController,
              public qrScanner: QRScanner,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
      // this.showCamera();
      // Optionally request the permission early
      this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
              if (status.authorized) {
                  // camera permission was granted
                  console.log('Camera Permission Given');

                  // let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];

                  // start scanning
                  let scanSub = this.qrScanner.scan().subscribe((text: string) => {


                      const confirm = this.alertCtrl.create({
                          title: "Qr Code",
                          message: "QR Code lido com sucesso!",
                          buttons: [
                              {
                                  text: "OK",
                                  handler: () => {

                                      this.qrScanner.hide(); // hide camera preview
                                      scanSub.unsubscribe(); // stop scanning

                                      this.navCtrl.setRoot(PinPage);
                                  }
                              }
                          ]
                      });
                      confirm.present();






                      // this.navCtrl.pop()
                      //     .then(() => this.navCtrl.push(PinRegisterPage))
                      //     .catch(() => this.navCtrl.push(PinRegisterPage));
                      //
                      // this.navCtrl.push(ModalpinPage).then(() => {
                      //   this.navCtrl.popAll();
                      // });

                      // this.navCtrl.push(PinRegisterPage);





                      // this.navCtrl.push(PinRegisterPage);


                      // hack to hide the app and show the preview
                      // ionApp.style.display = "block";
                  });

                  // show camera preview
                  // ionApp.style.display = "none";
                  this.qrScanner.show();

                  // wait for user to scan something, then the observable callback will be called
              } else if (status.denied) {
                  // camera permission was permanently denied
                  // you must use QRScanner.openSettings() method to guide the user to the settings page
                  // then they can grant the permission from there
                  console.log('Camera permission denied');
              } else {
                  // permission was denied, but not permanently. You can ask for permission again at a later time.
                  console.log('Permission denied for this runtime.');
              }
          })
          .catch((e: any) => {
            console.log(e)
              
          });

      // this.showCamera();
      // // Optionally request the permission early
      // this.qrScanner.prepare()
      //   .then((status: QRScannerStatus) => {
      //     if (status.authorized) {
      //       // camera permission was granted
      //       console.log('Camera Permission Given');
      //
      //       // const ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
      //
      //       // start scanning
      //       this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
      //
      //
      //           const confirm = this.alertCtrl.create({
      //             title: "Qr Code",
      //             message: "QR Code lido com sucesso!",
      //             buttons: [
      //               {
      //                 text: "OK",
      //                 handler: () => {
      //                   this.navCtrl.push(PinRegisterPage);
      //                 }
      //               }
      //             ]
      //           });
      //           confirm.present();
      //
      //         // hack to hide the app and show the preview
      //         // ionApp.style.display = "block";
      //       });
      //
      //       // show camera preview
      //       // ionApp.style.display = "none";
      //       this.qrScanner.show();
      //
      //       // wait for user to scan something, then the observable callback will be called
      //     } else if (status.denied) {
      //       // camera permission was permanently denied
      //       // you must use QRScanner.openSettings() method to guide the user to the settings page
      //       // then they can grant the permission from there
      //       console.log('Camera permission denied');
      //     } else {
      //       // permission was denied, but not permanently. You can ask for permission again at a later time.
      //       console.log('Permission denied for this runtime.');
      //     }
      //   })
      //   .catch((e: any) => console.log('Error is', e));


  }





  closeModal() {
    this.viewController.dismiss();
  }


  toggleFlashLight(){

    /** Default isFlashLightOn is false ,
     * enable it if false **/

    this.isFlashLightOn = !this.isFlashLightOn;
    if(this.isFlashLightOn){
      this.qrScanner.enableLight();
    }
    else{
      this.qrScanner.disableLight();
    }

  }
  toggleCamera(){
    /** Toggle Camera , Default is isBackMode is true , toggle
     * to false to enable front camera and vice versa.
     *
     * @type {boolean}
     */
    this.isBackMode =  !this.isBackMode;
    if(this.isBackMode){
      this.qrScanner.useFrontCamera();
    }
    else{
      this.qrScanner.useBackCamera();
    }
  }

  //
  //   ionViewWillUnload(){
  //   this.hideCamera();
  //   this.qrScanner.hide(); // hide camera preview
  //   this.scanSub.unsubscribe(); // stop scanning
  //
  //   this.qrScanner.destroy();
  //   console.log('Passei por aqui')
  //
  // }


  // showCamera() {
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  // }
  //
  // hideCamera() {
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  // }

  // goToPinRegister(params) {
  //   if (!params) params = {};
  //   this.navCtrl.push(PinRegisterPage);
  // }


}
