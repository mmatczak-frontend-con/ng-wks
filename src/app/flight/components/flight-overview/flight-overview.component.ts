import { Component, OnInit } from '@angular/core';
import {SearchCriteria} from '../../model/search-criteria';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'fla-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss']
})
export class FlightOverviewComponent {
  private searchCriteria: SearchCriteria = {
    source: 'WAW',
    destination: 'JFK'
  };

  constructor() {


  }

  search(newSearchCriteria: SearchCriteria) {
    console.log(newSearchCriteria);
  }
}
