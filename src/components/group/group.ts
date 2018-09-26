import { Component, Input } from '@angular/core';

/**
 * Generated class for the GroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "group",
  templateUrl: "group.html"
})
export class GroupComponent {
  @Input() groupId: string = "000000";
  @Input() value: number = 0.0;
  @Input() by: string = '';
  @Input() btnDisabled: boolean = false;

  @Input() dates: any[] = [
    {
      day: "02",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "03",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "04",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "05",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "06",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "07",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "08",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "09",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "10",
      month: "Nov",
      yaer: "2018",
      percent: 0
    },
    {
      day: "11",
      month: "Nov",
      yaer: "2018",
      percent: 70
    },
    {
      day: "12",
      month: "Nov",
      yaer: "2018",
      percent: 100
    },
    {
      day: "13",
      month: "Nov",
      yaer: "2018",
      percent: 100
    }
  ];

  constructor() {}

  getDates() {
    let dates = [];
    this.dates.map(function(d, k) {
      k++;
      dates[k] = Object.assign({}, d, { position: k });
    });
    return dates;
  }
}
