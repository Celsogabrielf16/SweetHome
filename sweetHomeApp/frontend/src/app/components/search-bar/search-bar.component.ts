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
  infoInputs: any = {};

  citySearched: string;
  tagSearched: string;
  maximunPrice: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.citySearched) {
        this.citySearched = params.citySearched;
      }
    });
    this.infoInputs.location = this.citySearched;
  }

  search() {
    this.citySearched = this.infoInputs.location;
    this.maximunPrice = this.infoInputs.maxValue;

    if (this.tagSearched && this.citySearched) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched]);
    } else if (this.citySearched) {
      this.router.navigate(['/search/city', this.citySearched]);
    } else if (this.tagSearched) {
      this.router.navigate(['/search/tag', this.tagSearched]);
    } else if (this.maximunPrice) {
      this.router.navigate(['/search/maximunPrice', this.maximunPrice]);
    } else {
      this.router.navigate(['/search']);
    }
  }

  tagClicked(tag: string) {
    this.tagSearched = tag;
    this.search();
  }

}
