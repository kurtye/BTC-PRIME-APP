import {Component} from '@angular/core';
import {
    AlertController,
    IonicPage,
    NavController,
    NavParams,
    ToastController,
    ViewController,
    ModalController
        } from 'ionic-angular';

import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {PinPage} from "../pin/pin";
import {RestProvider} from "../../providers/rest/rest";
import {Events} from "ionic-angular";


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
                public viewCtrl: ViewController,
                public restProvider: RestProvider,
                public events: Events) {
    }

    ionViewDidLoad() {
        this.showCamera();
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    console.log('Camera Permission Given');

                    // let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];

                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {





                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                        this.hideCamera();

                        this.navCtrl.setRoot(PinPage);


                        localStorage.setItem('qrcode', text)

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
            }).catch((e: any) => {

            //ATIVA PARA TESTE NA WEB
            this.navCtrl.setRoot(PinPage);
            //localStorage.setItem('qrcode', 'bWF4bXVuaG96'); //MAX
            localStorage.setItem('qrcode', 'Y29tZXRh'); //COMETA
            //localStorage.setItem('qrcode', 'trrrrrar'); //COMETA
            console.log('Error is', e)
        });

    }


    closeModal() {
        this.viewController.dismiss();
    }


    toggleFlashLight() {

        /** Default isFlashLightOn is false ,
         * enable it if false **/

        this.isFlashLightOn = !this.isFlashLightOn;
        if (this.isFlashLightOn) {
            this.qrScanner.enableLight();
        }
        else {
            this.qrScanner.disableLight();
        }

    }

    toggleCamera() {
        /** Toggle Camera , Default is isBackMode is true , toggle
         * to false to enable front camera and vice versa.
         *
         * @type {boolean}
         */
        this.isBackMode = !this.isBackMode;
        if (this.isBackMode) {
            this.qrScanner.useFrontCamera();
        }
        else {
            this.qrScanner.useBackCamera();
        }
    }


    showCamera() {
        (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    }

    hideCamera() {
        (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    }


}
