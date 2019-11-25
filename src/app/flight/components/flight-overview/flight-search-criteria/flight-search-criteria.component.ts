import {Component, Input} from '@angular/core';
import {SearchCriteria} from '../../../model/search-criteria';

@Component({
  selector: 'fla-flight-search-criteria',
  templateUrl: './flight-search-criteria.component.html',
  styleUrls: ['./flight-search-criteria.component.scss']
})
export class FlightSearchCriteriaComponent {
  @Input()
  value: SearchCriteria;

}
