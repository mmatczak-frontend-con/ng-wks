import {Component, OnInit} from '@angular/core';
import {SearchCriteria} from '../../model/search-criteria';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightService} from '../../services/flight.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FlightConnection} from '../../model/flight-connection';

@Component({
  selector: 'fla-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss']
})
export class FlightOverviewComponent {
  private searchCriteria: SearchCriteria = {
    source: 'WAW',
    destination: 'WRO'
  };

  private results$: Observable<FlightConnection[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private flights: FlightService) {
    this.results$ = route.params
      .pipe(
        tap(params => this.searchCriteria = {...params}),
        switchMap(params => flights.search(params))
      );
  }

  search(newSearchCriteria: SearchCriteria) {
    this.router.navigate([newSearchCriteria], {relativeTo: this.route});
  }
}
