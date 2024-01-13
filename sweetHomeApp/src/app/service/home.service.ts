import { Injectable } from '@angular/core';
import { Iproperty } from '../interfaces/Iproperty';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private property: Array<Iproperty> = [
    { id: 1, price: 150, city: 'Rio de Janeiro', country: 'Brasil', bedroom: 3, area: 120, bathroom: 2, spot: 2 },
    { id: 2, price: 200, city: 'Belo Horizonte', country: 'Brasil', bedroom: 4, area: 150, bathroom: 3, spot: 3 },
    { id: 3, price: 80, city: 'Salvador', country: 'Brasil', bedroom: 2, area: 80, bathroom: 1, spot: 1 },
    { id: 4, price: 300, city: 'Porto Alegre', country: 'Brasil', bedroom: 6, area: 180, bathroom: 4, spot: 4 },
    { id: 5, price: 120, city: 'Fortaleza', country: 'Brasil', bedroom: 3, area: 100, bathroom: 2, spot: 1 },
    { id: 6, price: 180, city: 'Curitiba', country: 'Brasil', bedroom: 4, area: 140, bathroom: 3, spot: 2 },
    { id: 7, price: 250, city: 'Recife', country: 'Brasil', bedroom: 5, area: 200, bathroom: 4, spot: 3 },
    { id: 8, price: 90, city: 'Brasília', country: 'Brasil', bedroom: 2, area: 80, bathroom: 1, spot: 1 },
    { id: 9, price: 160, city: 'Florianópolis', country: 'Brasil', bedroom: 3, area: 120, bathroom: 2, spot: 2 },
    { id: 10, price: 300, city: 'Manaus', country: 'Brasil', bedroom: 6, area: 180, bathroom: 4, spot: 3 }
  ];

  constructor() { }

  getProperty() : Array<Iproperty> {
    return this.property;
  }
}
