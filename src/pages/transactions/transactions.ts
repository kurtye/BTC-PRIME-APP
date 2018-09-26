import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface DayHistory {
  day: number,
  status: string,
  coin_name: string,
  exchange: string
}

@Component({
  selector: "page-transactions",
  templateUrl: "transactions.html"
})
export class TransactionsPage {
  coin: number = 0;
  icons: any = {
    "0": "../../assets/img/icons/bitcoin.png",
    "1": "../../assets/img/icons/ethereum.png",
    "2": "../../assets/img/icons/brl.png"
  };

  date: string = "2018-07";
  monthHistory: DayHistory[] = [
    {
      day: 12,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 11,
      status: "recebido",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 10,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 9,
      status: "transferido",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 8,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 7,
      status: "recebido",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 6,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 5,
      status: "recebido",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 4,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 3,
      status: "recebido",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 2,
      status: "enviado",
      coin_name: "BTC",
      exchange: '0,0012345'
    },
    {
      day: 1,
      status: "recebido",
      coin_name: "BTC",
      exchange: '0,0012345'
    }
  ];

  selectedDate(e) {
    console.log(this.date);
  }

  constructor(public navCtrl: NavController) {}
}
