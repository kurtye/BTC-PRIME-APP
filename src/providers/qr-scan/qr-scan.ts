import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";


/*
  Generated class for the QrScanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrScanProvider {

  constructor(public http: HttpClient, public qrScanner: QRScanner) {
    console.log('Hello QrScanProvider Provider');
  }


  scan():Promise<any> {
    return new Promise((resolve, reject) => {
      return this.startScanner()
        .then((data) => {
          if (data) {
            resolve(data);

          } else {
            reject("error");
          }
        })
    });
  }
  private startScanner():Promise<any> {
    // Get the device cam permission.
    return this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        return new Promise((resolve, reject) => {
          if (status.authorized) {
            let scanSub = this.qrScanner.scan().subscribe((code: string) => {
              this.qrScanner.hide();
              scanSub.unsubscribe();
              resolve(code);
            });

            this.qrScanner.show();
          } else if (status.denied) {
            // camera permission was permanently denied
            if (status.canOpenSettings) {
              this.qrScanner.openSettings();
            }
            reject(new Error('MESSAGES.QRSCANNER.CHANGE_SETTINGS_ERROR'));
          } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
            reject(new Error('MESSAGES.QRSCANNER.PERMISSION_DENIED_ERROR'));
          }
        });
      })
  }
  enaable_desable_light() {
    Promise.resolve("proceed")
      .then((k) => {
        return this.qrScanner.getStatus();
      }).then((status: QRScannerStatus) => {
      if (status.authorized) {
        if (status.canEnableLight) {
          if (status.lightEnabled) {
            return this.qrScanner.disableLight();
          } else {
            return this.qrScanner.enableLight();
          }
        }
      }
    }).then((ok) => {
      console.log(ok);
    }).catch((error) => {
      console.log(error);
    });
  }
  chnage_camera() {
    Promise.resolve("proceed")
      .then((k) => {
        return this.qrScanner.getStatus()
      }).then((status: QRScannerStatus) => {
      if (status.authorized) {
        if (status.canChangeCamera) {
          if (status.currentCamera == 0) {
            return this.qrScanner.useFrontCamera();
          } else if (status.currentCamera == 1) {
            return this.qrScanner.useBackCamera();
          }
        }
      } else {
        console.log("denied");
        return Promise.reject("denied");
      }
    }).then((ok) => {
      console.log(ok);
    }).catch((error) => {
      console.log(error);
    });
  }

}
