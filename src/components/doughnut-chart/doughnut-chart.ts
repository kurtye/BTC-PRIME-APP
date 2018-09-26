import { Component } from '@angular/core';

/**
 * Generated class for the DoughnutChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "doughnut-chart",
  templateUrl: "doughnut-chart.html"
})
export class DoughnutChartComponent {
  constructor() {}

  // Doughnut
  public doughnutChartLabels: string[] = ["Bitcoin", "Ether", "Reais"];
  public doughnutChartData: number[] = [12000.0, 4000.0, 2000.0];
  public doughnutChartType: string = "pie";
  public doughnutChartColors: any[] = [
    {
      backgroundColor: ["#D3C9A1", "#606060", "#4F4A33"],
      borderWidth: [0,0, 0]
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
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let index = tooltipItem.index;
          let value = data.datasets[0].data[index] || null;
          if (value) {
            let r = {
              '12000': '12.000,0',
              '4000': '4.000,0',
              '2000': '2.000.,0',
            };
            return "R$ " + (r[(value+'')]);
          }
        },
      }
    },
    scales: {

    }
  };

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
