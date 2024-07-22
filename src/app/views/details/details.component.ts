import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/property.service';
import { Property } from 'src/app/shared/models/Property';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  property: Property = new Property;

  svgBedroom = '../../../assets/Components/card/svgBedroom.svg';
  svgArea = '../../../assets/Components/card/svgArea.svg';
  svgBathroom = '../../../assets/Components/card/svgBathroom.svg';
  svgSpot = '../../../assets/Components/card/svgSpot.svg';
  imgWhatsApp = '../../../assets/icons/whatsapp.png';

  propertyImg: String[] = [];

  @ViewChild('map') mapRef: HTMLElement;

  options: google.maps.MapOptions = {
    mapId: "2e60ad0783128a85",
    center: { lat: -23.79846954345703, lng: -48.597328186035156 },
    zoom: 14
  };

  private apiUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(activatedRoute: ActivatedRoute, homeService: HomeService) {
    let propertyObservable: Observable<Property>;
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        homeService.getPropertyByID(params.id).subscribe((serverProperty) => {
          this.property = serverProperty;
          this.propertyImg = this.property.url;
        });
      }
    })
  }

  ngOnInit(): void {
      let loader = new Loader({
        apiKey: 'AIzaSyB5yMmUVIOFWkq8ZD11E7aWHKI8S91PqIc'
      })

      loader.load().then(() => {
        new google.maps.Map(this.mapRef, {
          center: { lat: -23.798507690429688, lng: -48.59711456298828 },
          zoom: 14
        })
      })
  }
}
