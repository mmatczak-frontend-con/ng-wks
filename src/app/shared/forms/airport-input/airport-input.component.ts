import {Component, Input, OnInit} from '@angular/core';
import {Airport} from '../../../flight/model/flight-connection';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {FlightService} from '../../../flight/services/flight.service';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'fla-airport-input',
  templateUrl: './airport-input.component.html',
  styleUrls: ['./airport-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: AirportInputComponent, multi: true}
  ]
})
export class AirportInputComponent implements ControlValueAccessor {
  airportFormControl = new FormControl();

  onChangeFn;
  onTouchedFn;

  formatter = (airport: Airport) => airport && airport.name ? `${airport.name} (${airport.code})` : '';

  searchAirports = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(text => this.flights.getAirports(text))
    );
  };

  constructor(private flights: FlightService) {
    this.airportFormControl.valueChanges.subscribe(newValue => {
      if (this.onChangeFn) {
        this.onChangeFn(newValue);
      }
    });
  }

  writeValue(obj: any): void {
    this.airportFormControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.airportFormControl.disable() : this.airportFormControl.enable();
  }
}
