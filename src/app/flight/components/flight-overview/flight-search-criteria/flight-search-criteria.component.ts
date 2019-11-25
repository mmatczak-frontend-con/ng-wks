import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchCriteria} from '../../../model/search-criteria';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'fla-flight-search-criteria',
  templateUrl: './flight-search-criteria.component.html',
  styleUrls: ['./flight-search-criteria.component.scss']
})
export class FlightSearchCriteriaComponent {
  @Input()
  value: SearchCriteria;

  @Output()
  valueChange = new EventEmitter<SearchCriteria>();

  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      source: new FormControl('dfdsd'),
      destination: new FormControl('fdsfdss')
    });
  }

  search() {
    this.valueChange.emit(this.searchForm.value);
  }
}
