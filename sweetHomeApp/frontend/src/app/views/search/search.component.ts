import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/property.service';
import { Property } from 'src/app/shared/models/Property';

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
  svgArrow = 'assets/Components/card/svgArrow.svg';

  @ViewChild('previous') previousRef: ElementRef;
  @ViewChild('next') nextRef: ElementRef;

  properties: Array<any>;
  propertiesSeparated: Array<any>;
  propertiesStep: number = 0;
  numberOfProperties: number;
  stringInfo: string = '';

  constructor(
    private homeService: HomeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      let propertiesObservable: Observable<Property[]>

      const city: string = params['citySearched'];
      const tag: string = params['tagSearched'];
      const maximunPrice: number = params['maximunPrice'];
      const minimunPrice: number = params['minimunPrice'];
      const numberOfBedrooms: number = params['numberOfBedrooms'];



      if(city && tag && minimunPrice && maximunPrice && numberOfBedrooms) {
        propertiesObservable = this.homeService.getPropertiesByCityTagPriceRangeAndBedrooms(city, tag, minimunPrice, maximunPrice, numberOfBedrooms);
        this.stringInfo = '';
      } else if(city && tag) {
        propertiesObservable = this.homeService.getPropertiesByCityAndTag(city, tag);
        this.stringInfo = '';
      } else if(minimunPrice && maximunPrice) {
        propertiesObservable = this.homeService.getPropertiesByPriceRange(minimunPrice, maximunPrice);
        this.stringInfo = `com preço entre R$ ${minimunPrice} e R$ ${maximunPrice}`;
      } else if(city) {
        propertiesObservable = this.homeService.getPropertiesByCity(city);
        this.stringInfo = `em ${this.capitalizeWords(city)}`;
      } else if(tag) {
        propertiesObservable = this.homeService.getPropertiesByTag(tag);
        this.stringInfo = '';
      } else if(minimunPrice) {
        propertiesObservable = this.homeService.getPropertiesByMinimumPrice(minimunPrice);
        this.stringInfo = `com preço maior que R$ ${minimunPrice}`;
      } else if(maximunPrice) {
        propertiesObservable = this.homeService.getPropertiesByMaximumPrice(maximunPrice);
        this.stringInfo = `com preço menor que R$ ${maximunPrice}`;
      } else if(numberOfBedrooms) {
        propertiesObservable = this.homeService.getPropertiesByBedrooms(numberOfBedrooms);
        this.stringInfo = `com ${numberOfBedrooms} camas`;
      } else {
        propertiesObservable = this.homeService.getAllProperties();
      }

      propertiesObservable.subscribe((serverProperty) => {
        this.properties = serverProperty;
        this.arrayChunk(5);
        this.properties = this.propertiesSeparated[this.propertiesStep];
        this.hideArrow();
      })
    })
  }

  redirectDetails(id: number) {
    this.router.navigate(['details/', id]);
  }

  arrayChunk(lenghtNewArray: number) {
    let newArray: any[] = [], aux = 0;
    this.numberOfProperties = this.properties.length;

    while (aux < this.properties.length) {
      newArray.push(this.properties.slice(aux, aux += lenghtNewArray));
    }

    this.propertiesSeparated = newArray;
  }

  previousCardSet(jumpSize: number) {
    if (this.propertiesStep != 0) {
      this.propertiesStep -= jumpSize;
      this.properties = this.propertiesSeparated[this.propertiesStep];
    }
    this.hideArrow()
  }

  nextCardSet(jumpSize: number) {
    if (this.propertiesStep < this.propertiesSeparated.length) {
      this.propertiesStep += jumpSize;
      this.properties = this.propertiesSeparated[this.propertiesStep];
    }
    this.hideArrow();
  }

  changeStep(index: number) {
    let jumpSize = Math.abs(this.propertiesStep - index);

    if (index < this.propertiesStep) {
      this.previousCardSet(jumpSize);
    } else if (index > this.propertiesStep) {
      this.nextCardSet(jumpSize);
    }
  }

  hideArrow() {
    let next = this.nextRef.nativeElement.classList;
    let previous = this.previousRef.nativeElement.classList;
    this.propertiesStep === 0 ? previous.remove('active') : previous.add('active');
    this.propertiesStep === this.propertiesSeparated.length - 1 ? next.remove('active') : next.add('active');
  }

  capitalizeWords(string: string) {
    return string.toLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
}
