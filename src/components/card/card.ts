import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "card",
  templateUrl: "card.html"
})
export class CardComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public value: number = 0;
  @Input() public link: any = null;
  @Input() public buttonLabel: string = "";
  //@Input("icon") public iconName: string = "logo-bitcoin";

  @Output() onTap = new EventEmitter;

  constructor() {}
  ngOnInit(): void {}

  handleClieckedEvent(e) {
    this.onTap.emit(e);
  }
}
