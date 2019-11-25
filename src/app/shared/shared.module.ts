import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { AirportInputComponent } from './forms/airport-input/airport-input.component';

@NgModule({
  declarations: [AirportInputComponent],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, NgbTypeaheadModule, AirportInputComponent]
})
export class SharedModule { }
