import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiKey: string = 'AIzaSyB7HEhAkkTGe4WOuk0QiDW5rJWA1pdNWTQ';
  private apiUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: HttpClient) { }

  getCoordinates(location: string): Observable<any> {
    const url = `${this.apiUrl}?address=${encodeURIComponent(location)}&key=${this.apiKey}`;

    return this.http.get(url);

  }
}
