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

  getPropertiesByMinimumPrice(minimunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/minimunPrice/${minimunPrice}`);
  }

  getPropertiesByMaximumPrice(maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByBedrooms(numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/numberOfBedrooms/${numberOfBedrooms}`);
  }








  getPropertiesByCityAndTag(citySearched: string, tagSearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}`);
  }

  getPropertiesByCityAndMinimunPrice(citySearched: string, minimunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/minimunPrice/${minimunPrice}`);
  }

  getPropertiesByCityAndMaximunPrice(citySearched: string, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByCityAndBedrooms(citySearched: string, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByPriceRange(minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }











  getPropertiesByTagPriceRangeAndBedrooms(tagSearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByCityPriceRangeAndBedrooms(citySearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByCityTagMaximunPriceAndBedrooms(citySearched: string, tagSearched: string, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByCityTagMinimunPriceAndBedrooms(citySearched: string, tagSearched: string, minimunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByCityTagAndPriceRange(citySearched: string, tagSearched: string, minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByCityTagPriceRangeAndBedrooms(citySearched: string, tagSearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/city/${citySearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }
}
