import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  icons: Object | any = icons;
  citySearched: string = '';

  infoInputs: any = {};

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.citySearched) {
        this.citySearched = params.citySearched;
      }
    });
    this.infoInputs.location = this.citySearched;
  }

  search() {
    this.router.navigate(['/search/city/', this.infoInputs.location]);
  }

}
