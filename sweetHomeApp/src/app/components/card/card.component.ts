import { Component } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  svgBedroom = '../../../assets/Components/card/svgBedroom.svg';
  svgArea = '../../../assets/Components/card/svgArea.svg';
  svgBathroom = '../../../assets/Components/card/svgBathroom.svg';
  svgSpot = '../../../assets/Components/card/svgSpot.svg';
  imgProperty = './../../../assets/Components/card/imgProperty.jpg';

  infoProperty: any = [];
  randomNumber: number = Math.floor(Math.random() * 10);

  constructor(private homeService: HomeService) {
    this.infoProperty = homeService.getProperty()[this.randomNumber];
  }
}
