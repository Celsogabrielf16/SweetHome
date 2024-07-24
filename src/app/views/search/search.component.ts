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

  svgBedroom = 'assets/Components/search/svgBedroom.svg';
  svgArea = 'assets/Components/search/svgArea.svg';
  svgBathroom = 'assets/Components/search/svgBathroom.svg';
  svgSpot = 'assets/Components/search/svgSpot.svg';
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

      const address: string = params['addressSearched'];
      const tag: string = params['tagSearched'];
      const maximunPrice: number = params['maximunPrice'];
      const minimunPrice: number = params['minimunPrice'];
      const numberOfBedrooms: number = params['numberOfBedrooms'];

      this.getProperties(address, tag, maximunPrice, minimunPrice, numberOfBedrooms).subscribe((serverProperty) => {
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

  getProperties(address?: string, tag?: string, maximunPrice?: number, minimunPrice?: number, numberOfBedrooms?: number): Observable<Property[]> {
    let propertiesObservable: Observable<Property[]>;

    if(address && tag && minimunPrice && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagPriceRangeAndBedrooms(address, tag, minimunPrice, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && tag && minimunPrice && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagAndPriceRange(address, tag, minimunPrice, maximunPrice);
      this.stringInfo = '';
    } else if(address && tag && minimunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagMinimunPriceAndBedrooms(address, tag, minimunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && tag && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagMaximunPriceAndBedrooms(address, tag, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && minimunPrice && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressPriceRangeAndBedrooms(address, minimunPrice, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(tag && minimunPrice && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByTagPriceRangeAndBedrooms(tag, minimunPrice, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && tag && minimunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagAndMinimunPrice(address, tag, minimunPrice);
      this.stringInfo = '';
    } else if(address && tag && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagAndMaximunPrice(address, tag, maximunPrice);
      this.stringInfo = '';
    } else if(address && tag && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressTagAndBedrooms(address, tag, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && minimunPrice && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressAndPriceRange(address, minimunPrice, maximunPrice);
      this.stringInfo = '';
    } else if(address && minimunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressMinimunPriceAndBedrooms(address, minimunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressMaximunPriceAndBedrooms(address, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(tag && minimunPrice && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByTagAndPriceRange(tag, minimunPrice, maximunPrice);
      this.stringInfo = '';
    } else if(tag && minimunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByTagMinimunPriceAndBedrooms(tag, minimunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(tag && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByTagMaximunPriceAndBedrooms(tag, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(minimunPrice && maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByPriceRangeAndBedrooms(minimunPrice, maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address && tag) {
      propertiesObservable = this.homeService.getPropertiesByAddressAndTag(address, tag);
      this.stringInfo = '';
    } else if(address && minimunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressAndMinimunPrice(address, minimunPrice);
      this.stringInfo = '';
    } else if(address && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByAddressAndMaximunPrice(address, maximunPrice);
      this.stringInfo = '';
    } else if(address && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByAddressAndBedrooms(address, numberOfBedrooms);
      this.stringInfo = '';
    } else if(tag && minimunPrice) {
      propertiesObservable = this.homeService.getPropertiesByTagAndMinimunPrice(tag, minimunPrice);
      this.stringInfo = '';
    } else if(tag && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByTagAndMaximunPrice(tag, maximunPrice);
      this.stringInfo = '';
    } else if(tag && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByTagAndBedrroms(tag, numberOfBedrooms);
      this.stringInfo = '';
    } else if(minimunPrice && maximunPrice) {
      propertiesObservable = this.homeService.getPropertiesByPriceRange(minimunPrice, maximunPrice);
      this.stringInfo = `com preço entre R$ ${minimunPrice} e R$ ${maximunPrice}`;
    } else if(minimunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByMinimunPriceAndBedrooms(minimunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(maximunPrice && numberOfBedrooms) {
      propertiesObservable = this.homeService.getPropertiesByMaximunPriceAndBedrooms(maximunPrice, numberOfBedrooms);
      this.stringInfo = '';
    } else if(address) {
      propertiesObservable = this.homeService.getPropertiesByAddress(address);
      this.stringInfo = `em ${this.capitalizeWords(address)}`;
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
    return propertiesObservable;
  }

}
