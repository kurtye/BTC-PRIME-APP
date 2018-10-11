import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';

@Component({
    selector: "doughnut-chart",
    templateUrl: "doughnut-chart.html"
})
export class DoughnutChartComponent {

    usuarioSaldoV: number;
    saldoBTC: number;
    cotacaoInfo: number;
    total: any;


    constructor(public navCtrl: NavController,
                public events: Events) {

        events.subscribe('UpdateMenu', (nome, id, saldoL, saldoV: number, saldoBtc: number, cotacaoInfo: number) => {

            console.log('saldoV', saldoV)

            this.usuarioSaldoV = saldoV;

            this.saldoBTC = saldoBtc;
            this.cotacaoInfo = cotacaoInfo;

            console.log('TIPO' + typeof +this.usuarioSaldoV);

            this.total = +this.saldoBTC * +this.cotacaoInfo + +this.usuarioSaldoV;
            console.log(this.total)


        });

        // async function doughnutChartData(ms: number) {
        //
        //     return new Promise( resolve => setTimeout(resolve, ms) );
        // }this.saldoBTC
    }

    ngAfterViewInit() {


    }
    public doughnutChartLabels: string[] = ["Bitcoin", "Reais"];
    // public doughnutChartData = [this.usuarioSaldoV, this.saldoBTC];
    public doughnutChartType: string = "pie";
    public doughnutChartColors: any[] = [
            {
                backgroundColor: ["#D3C9A1", "#606060", "#4F4A33"],
                borderWidth: [0, 0, 0]
            }
        ];
    public doughnutChartOptions: any = {
            legend: {
                display: false,
                position: "bottom"
            },
            cutoutPercentage: 60,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            // tooltips: {
            //   callbacks: {
            //     label: function (tooltipItem, data) {
            //       let index = tooltipItem.index;
            //       let value = data.datasets[0].data[index] || null;
            //       if (value) {
            //         let r = {
            //           '12000': '12.000,0',
            //           '4000': '4.000,0',
            //           '1000': '6.000,0',
            //         };
            //         return "R$ " + (r[(value+'')]);
            //       }
            //     },
            //   }
            // },
            scales: {}
        };


    // Doughnut




    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
