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

  getPropertyByID(id: number): Property {
    return this.property.find(item => item.id == id) ?? new Property;
  }

  getPropertyByCity(citySearched: string): Property[] {
    return this.getAllProperties().filter(property => property.city.toLowerCase().includes(citySearched.toLowerCase()));
  }

  getAllPropertiesTags(): Tag[] {
    return tags;
  }

  getAllPropertiesByTag(tag: string): Property[] {
    return tag === 'Todos' ?
      this.getAllProperties() :
      this.getAllProperties().filter(property => property.tags?.includes(tag));
  }

  postProperty(newProperty: Property) {
    this.property.push(newProperty);
  }
}
