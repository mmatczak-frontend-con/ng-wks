import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchCriteriaComponent } from './flight-search-criteria.component';

describe('FlightSearchCriteriaComponent', () => {
  let component: FlightSearchCriteriaComponent;
  let fixture: ComponentFixture<FlightSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
