import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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

  constructor(private homeService: HomeService, private router: Router) {
    this.properties = homeService.getProperty();
  }

  redirectDetails(id: number) {
    this.router.navigate(['details/', id]);
  }

  arrayChunk(lenghtNewArray: number) {
    let newArray = [];
    let aux = 0;
    this.numberOfProperties = this.properties.length;

    while (aux < this.numberOfProperties) {
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
    this.propertiesStep === this.numberOfProperties - 1 ? next.remove('active') : next.add('active');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.arrayChunk(5);
      this.properties = this.propertiesSeparated[this.propertiesStep];
      this.hideArrow();
    }, 100);
  }
}
