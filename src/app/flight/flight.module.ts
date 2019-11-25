import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FlightOverviewComponent} from './components/flight-overview/flight-overview.component';
import { FlightSearchCriteriaComponent } from './components/flight-overview/flight-search-criteria/flight-search-criteria.component';

@NgModule({
  declarations: [FlightOverviewComponent, FlightSearchCriteriaComponent],
  exports: [
    FlightOverviewComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FlightModule {
}
