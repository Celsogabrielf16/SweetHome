import { Injectable } from '@angular/core';
import { Property } from "../shared/models/Property";
import { properties, tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private property: Property[] = properties;

  getAllProperties(): Property[] {
    return this.property;
  }

  getAllPropertiesTags(): Tag[] {
    return tags;
  }

  getPropertyByID(id: number): Property {
    return this.property.find(item => item.id == id) ?? new Property;
  }

  getPropertiesByCity(city: string): Property[] {
    return this.getAllProperties().filter(property => property.city.toLowerCase().includes(city.toLowerCase()));
  }

  getPropertiesByTag(tag: string): Property[] {
    return this.getAllProperties().filter(property => property.tags?.includes(tag));
  }

  getPropertiesByCityAndTag(city: string, tag: string): Property[] {
    return this.getAllProperties().filter(property => property.city.toLowerCase().includes(city.toLowerCase())).filter(property => property.tags?.includes(tag));
  }

  postProperty(newProperty: Property) {
    this.property.push(newProperty);
  }
}
