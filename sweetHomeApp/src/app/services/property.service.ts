import { Injectable } from '@angular/core';
import { Property } from "../shared/models/Property";
import properties from '../../data';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private property: Property[] = properties;

  getAllProperties(): Property[] {
    return this.property;
  }

  getPropertyByID(id: number): Property | undefined {
    return this.property.find(item => item.id == id);
  }

  getPropertyByCity(citySearched: string): Property[] {
    return this.getAllProperties().filter(property => {
      property.city.toLowerCase().includes(citySearched.toLowerCase());
    });
  }

  postProperty(newProperty: Property) {
    this.property.push(newProperty);
  }
}
