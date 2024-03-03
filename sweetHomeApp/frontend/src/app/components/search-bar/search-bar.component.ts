import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import Search from 'src/app/shared/models/Search';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  icons: Object | any = icons;
  infoInputs: Search = new Search;

  citySearched: string;
  tagSearched: string;
  minimunPrice: number;
  maximunPrice: number;
  numberOfBedrooms: number;

  constructor(private router: Router, private tagService: TagService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      params.citySearched ? this.citySearched = params.citySearched : null;
      params.tagSearched ? this.tagService.updateTagActive(params.tagSearched) : null;
      params.minimunPrice ? this.minimunPrice = params.minimunPrice : null;
      params.maximunPrice ? this.maximunPrice = params.maximunPrice : null;
      params.numberOfBedrooms ? this.numberOfBedrooms = params.numberOfBedrooms : null;
    });

    this.infoInputs.location = this.citySearched;
    this.infoInputs.minValue = this.minimunPrice;
    this.infoInputs.maxValue = this.maximunPrice;
    this.infoInputs.bedroom = this.numberOfBedrooms;
  }

  search() {
    this.citySearched = this.infoInputs.location;
    this.minimunPrice = this.infoInputs.minValue;
    this.maximunPrice = this.infoInputs.maxValue;
    this.numberOfBedrooms = this.infoInputs.bedroom;
    this.tagSearched = this.tagService.tagActive;

    this.redirectRoute();
  }

  tagClicked(tag: string) {
    this.tagSearched = tag;
    this.search();
  }

  redirectRoute() {
    if (this.citySearched && this.tagSearched && this.minimunPrice && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.tagSearched && this.minimunPrice && this.maximunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice]);

    } else if (this.citySearched && this.tagSearched && this.minimunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.tagSearched && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.minimunPrice && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.tagSearched && this.minimunPrice && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.tagSearched && this.minimunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'minimunPrice', this.minimunPrice]);

    } else if (this.citySearched && this.tagSearched && this.maximunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'maximunPrice', this.maximunPrice]);

    } else if (this.citySearched && this.tagSearched && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.minimunPrice && this.maximunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice]);

    } else if (this.citySearched && this.minimunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'minimunPrice', this.minimunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.tagSearched && this.minimunPrice && this.maximunPrice) {
      this.router.navigate(['/search/tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice]);

    } else if (this.tagSearched && this.minimunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/tag', this.tagSearched, 'minimunPrice', this.minimunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.tagSearched && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/tag', this.tagSearched, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.minimunPrice && this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched && this.tagSearched) {
      this.router.navigate(['/search/city', this.citySearched, 'tag', this.tagSearched]);

    } else if (this.citySearched && this.minimunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'minimunPrice', this.minimunPrice]);

    } else if (this.citySearched && this.maximunPrice) {
      this.router.navigate(['/search/city', this.citySearched, 'maximunPrice', this.maximunPrice]);

    } else if (this.citySearched && this.numberOfBedrooms) {
      this.router.navigate(['/search/city', this.citySearched, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.tagSearched && this.minimunPrice) {
      this.router.navigate(['/search/tag', this.tagSearched, 'minimunPrice', this.minimunPrice]);

    } else if (this.tagSearched && this.maximunPrice) {
      this.router.navigate(['/search/tag', this.tagSearched, 'maximunPrice', this.maximunPrice]);

    } else if (this.tagSearched && this.numberOfBedrooms) {
      this.router.navigate(['/search/tag', this.tagSearched, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.minimunPrice && this.maximunPrice) {
      this.router.navigate(['/search/minimunPrice', this.minimunPrice, 'maximunPrice', this.maximunPrice]);

    } else if (this.minimunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/minimunPrice', this.minimunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.maximunPrice && this.numberOfBedrooms) {
      this.router.navigate(['/search/maximunPrice', this.maximunPrice, 'numberOfBedrooms', this.numberOfBedrooms]);

    } else if (this.citySearched) {
      this.router.navigate(['/search/city', this.citySearched]);

    } else if (this.tagSearched) {
      this.router.navigate(['/search/tag', this.tagSearched]);

    } else if (this.minimunPrice) {
      this.router.navigate(['/search/minimunPrice', this.minimunPrice]);

    } else if (this.maximunPrice) {
      this.router.navigate(['/search/maximunPrice', this.maximunPrice]);

    } else if (this.numberOfBedrooms) {
      this.router.navigate(['/search/numberOfBedrooms', this.numberOfBedrooms]);

    } else {
      this.router.navigate(['/search']);
    }
  }
}
