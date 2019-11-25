import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlightModule} from './flight/flight.module';
import {RouterModule} from '@angular/router';
import {FlightOverviewComponent} from './flight/components/flight-overview/flight-overview.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlightModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/flights', pathMatch: 'full'},
      {
        path: 'flights',
        component: FlightOverviewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
