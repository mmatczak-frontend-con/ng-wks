import {Component, Input} from '@angular/core';
import {FlightConnection} from '../../../model/flight-connection';

@Component({
  selector: 'fla-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent {
  @Input()
  value: FlightConnection[];

  constructor() {
  }

}
