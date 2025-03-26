import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Property } from "../shared/models/Property";
import { Tag } from '../shared/models/Tag';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private readonly URL = "https://portfolio-api-pink-nine.vercel.app/property";

  constructor(private httpClient: HttpClient) { }

  registerProperty(PropertyRegister: Property): Observable<Property> {
    return this.httpClient.post<Property>(`${this.URL}/register`, PropertyRegister).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }


  getAllProperties(): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}`);
  }

  getAllPropertiesTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.URL}/tags`);
  }

  getPropertyByID(idSearched: number): Observable<Property> {
    return this.httpClient.get<Property>(`${this.URL}/id/${idSearched}`);
  }

  getPropertiesByAddress(addressSearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}`);
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

  getPropertiesByAddressAndTag(addressSearched: string, tagSearched: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}`);
  }

  getPropertiesByAddressAndMinimunPrice(addressSearched: string, minimunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/minimunPrice/${minimunPrice}`);
  }

  getPropertiesByAddressAndMaximunPrice(addressSearched: string, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByAddressAndBedrooms(addressSearched: string, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByTagAndMinimunPrice(tagSearched: string, minimunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/minimunPrice/${minimunPrice}`);
  }

  getPropertiesByTagAndMaximunPrice(tagSearched: string, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByTagAndBedrroms(tagSearched: string, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByPriceRange(minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByMinimunPriceAndBedrooms(minimunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/minimunPrice/${minimunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByMaximunPriceAndBedrooms(maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressTagAndMinimunPrice(addressSearched: string, tagSearched: string, minimunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}`);
  }

  getPropertiesByAddressTagAndMaximunPrice(addressSearched: string, tagSearched: string, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByAddressTagAndBedrooms(addressSearched: string, tagSearched: string, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressAndPriceRange(addressSearched: string, minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByAddressMinimunPriceAndBedrooms(addressSearched: string, minimunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/minimunPrice/${minimunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressMaximunPriceAndBedrooms(addressSearched: string, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByTagAndPriceRange(tagSearched: string, minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByTagMinimunPriceAndBedrooms(tagSearched: string, minimunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/minimunPrice/${minimunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByTagMaximunPriceAndBedrooms(tagSearched: string, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByPriceRangeAndBedrooms(minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressTagAndPriceRange(addressSearched: string, tagSearched: string, minimunPrice: number, maximunPrice: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}`);
  }

  getPropertiesByAddressTagMinimunPriceAndBedrooms(addressSearched: string, tagSearched: string, minimunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressPriceRangeAndBedrooms(addressSearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressTagMaximunPriceAndBedrooms(addressSearched: string, tagSearched: string, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByTagPriceRangeAndBedrooms(tagSearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }

  getPropertiesByAddressTagPriceRangeAndBedrooms(addressSearched: string, tagSearched: string, minimunPrice: number, maximunPrice: number, numberOfBedrooms: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(`${this.URL}/address/${addressSearched}/tag/${tagSearched}/minimunPrice/${minimunPrice}/maximunPrice/${maximunPrice}/numberOfBedrooms/${numberOfBedrooms}`);
  }
}
