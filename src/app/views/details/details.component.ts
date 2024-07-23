import { GeocodingService } from 'src/app/services/geocoding.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/property.service';
import { Property } from 'src/app/shared/models/Property';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {

  svgBedroom = '../../../assets/Components/card/svgBedroom.svg';
  svgArea = '../../../assets/Components/card/svgArea.svg';
  svgBathroom = '../../../assets/Components/card/svgBathroom.svg';
  svgSpot = '../../../assets/Components/card/svgSpot.svg';
  imgWhatsApp = '../../../assets/icons/whatsapp.png';

  propertyImg: String[] = [];
  property: Property = new Property;

  latitude!: number;
  longitude!: number;

  constructor(activatedRoute: ActivatedRoute, homeService: HomeService, private geocodingService: GeocodingService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        homeService.getPropertyByID(params.id).subscribe((serverProperty) => {
          this.property = serverProperty;
          this.propertyImg = this.property.url;
          this.getCoordinates(this.property.city, this.property.country);
        });
      }
    })
  }

  getCoordinates(cityName: string, countryName: string) {
    const locationString = cityName + ", " + countryName

    this.geocodingService.getCoordinates(locationString).subscribe(response => {
      if (response.status === 'OK') {
        let indexCorreto: number = 0;

        for (let index = 0; index < response.results.length; index++) {
          if (response.results[index].address_components[0].long_name === cityName) {
            indexCorreto = index;
            break;
          }
        }
        
        const location = response.results[indexCorreto].geometry.location;
        this.latitude = location.lat;
        this.longitude = location.lng;
      } else {
        console.error('Geocoding failed: ', response.status);
      }
    });
  }
}
