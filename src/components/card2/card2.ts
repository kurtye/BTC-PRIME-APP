import { Component, Input } from '@angular/core';

/**
 * Generated class for the Card2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card2',
  templateUrl: 'card2.html'
})
export class Card2Component {

  @Input() value: number = 0.0;

  constructor() {
  }

}
