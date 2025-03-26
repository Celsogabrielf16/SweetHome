import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/shared/models/Property';

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

  @Input() infoCard: Property;

  constructor(private router: Router) {}

  redirectDetails() {
    this.router.navigate(['details/', this.infoCard.id]);
  }
}
