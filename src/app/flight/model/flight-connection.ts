export interface FlightConnection {
  origin: Airport;
  destination: Airport;
  stops: Airport[];
  timeAtOrigin: string;
  timeAtDestination: string;
}

export interface Airport {
  code: string;
  name: string;
}
