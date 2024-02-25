import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Iproperty } from 'src/app/interfaces/Iproperty';

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

  @Input() infoCard: Iproperty;

  constructor(private router: Router) {

  }

  redirectDetails() {
    this.router.navigate(['details/', this.infoCard.id]);
  }
}
