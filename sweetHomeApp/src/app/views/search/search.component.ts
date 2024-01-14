import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  svgBedroom = 'assets/Components/card/svgBedroom.svg';
  svgArea = 'assets/Components/card/svgArea.svg';
  svgBathroom = 'assets/Components/card/svgBathroom.svg';
  svgSpot = 'assets/Components/card/svgSpot.svg';

  infoProperty: any = [];

  constructor(private homeService: HomeService, private router: Router) {
    this.infoProperty = homeService.getProperty();
  }

  redirectDetails(id: number) {
    this.router.navigate(['details/', id]);
  }
}
