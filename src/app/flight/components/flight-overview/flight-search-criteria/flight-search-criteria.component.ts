import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchCriteria} from '../../../model/search-criteria';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {FlightService} from '../../../services/flight.service';
import {Airport} from '../../../model/flight-connection';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'fla-flight-search-criteria',
  templateUrl: './flight-search-criteria.component.html',
  styleUrls: ['./flight-search-criteria.component.scss']
})
export class FlightSearchCriteriaComponent {
  @Input()
  set value(newValue: SearchCriteria) {
    if (newValue) {
      this.searchForm.patchValue(newValue);
    }
  }

  @Output()
  valueChange = new EventEmitter<SearchCriteria>();

  searchForm: FormGroup;


  constructor(private flights: FlightService) {
    this.searchForm = new FormGroup({
      source: new FormControl(''),
      destination: new FormControl('')
    });
  }

  search() {
    this.valueChange.emit(this.searchForm.value);
  }
}
