import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproperty } from 'src/app/interfaces/Iproperty';
import { HomeService } from 'src/app/services/property.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {

  infoProperty: Iproperty | undefined;

  svgBedroom = '../../../assets/icons/bedroom.png';
  svgArea = '../../../assets/icons/uf.png';
  svgBathroom = '../../../assets/icons/bathroom.png';
  svgSpot = '../../../assets/icons/spot.png';

  constructor(activatedRoute: ActivatedRoute, homeService: HomeService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        this.infoProperty = homeService.getPropertyByID(params.id);
      }
    })
  }
}
