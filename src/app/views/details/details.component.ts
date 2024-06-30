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

  property: Property = new Property;

  svgBedroom = '../../../assets/icons/bedroom.png';
  svgArea = '../../../assets/icons/uf.png';
  svgBathroom = '../../../assets/icons/bathroom.png';
  svgSpot = '../../../assets/icons/spot.png';

  constructor(activatedRoute: ActivatedRoute, homeService: HomeService) {
    let propertyObservable: Observable<Property>;
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        homeService.getPropertyByID(params.id).subscribe((serverProperty) => {
          this.property = serverProperty;
        });
      }
    })
  }
}
