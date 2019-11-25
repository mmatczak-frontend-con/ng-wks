import {SearchCriteria} from '../model/search-criteria';
import {Observable, of} from 'rxjs';
import {Airport, FlightConnection} from '../model/flight-connection';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) {
  }

  search(searchCriteria: SearchCriteria): Observable<FlightConnection[]> {
    return this.http.get<FlightConnection[]>('api/connections');
  }

  getAirports(text: string): Observable<Airport[]> {
    return this.http.get<Airport[]>(`api/airports`, {
      params: new HttpParams().append('q', text)
    });
  }
}
