import { Injectable } from '@angular/core';
import { Iproperty } from '../interfaces/Iproperty';
import properties from 'src/assets/properties';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private property: Array<Iproperty> = properties;

  getOneProperty(id: number): Iproperty | undefined {
    return this.property.find(item => item.id == id);
  }

  getProperty(): Array<Iproperty> {
    return this.property;
  }

  postProperty(newProperty: Iproperty) {
    this.property.push(newProperty);
  }
}
