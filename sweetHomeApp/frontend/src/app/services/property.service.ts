import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Property } from "../shared/models/Property";
import { Tag } from '../shared/models/Tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private readonly URL = "http://localhost:3000/property";

  constructor(private httpClient: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}`);
  }

  getAllPropertiesTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.URL}/tags`);
  }

  getPropertyByID(idSearched: number): Observable<Property> {
    return this.httpClient.get<Property>(`${this.URL}/id/${idSearched}`);
  }

  getPropertiesByCity(citySearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}`);
  }

  getPropertiesByTag(tagSearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}`);
  }

  getPropertiesByMaximumPrice(maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByCityAndTag(citySearched: string, tagSearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}`);
  }
}
