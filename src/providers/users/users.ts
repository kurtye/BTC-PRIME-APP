import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import {Observable} from "rxjs";
import {Header} from "ionic-angular";
import { Observable } from  'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  constructor( ) { }

  // login()  {
  //   return new Promise((resolve, reject) => {
  //
  //     let headers = new HttpHeaders()
  //       .set('Content-Type', 'application/json');
  //     return this.http.post('https://escritorio.inovatyon.com.br/api/', {
  //       "data": {
  //         "mining/app/usuarioLogar": {
  //           "login": "cometa",
  //           "senha": "1234"
  //         }
  //       }
  //     })
  //       .subscribe((result: any) => {
  //           resolve(result.json());
  //         },
  //         (error) => {
  //           reject(error.json());
  //         });
  //   });
  //
  // }




}
