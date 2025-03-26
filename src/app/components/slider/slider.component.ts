import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { HomeService } from 'src/app/services/property.service';
import { Property } from 'src/app/shared/models/Property';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './slider.component.scss'
  ]
})

export class SliderComponent {
  @ViewChild('slider') sliderRef: ElementRef;
  @Input() titleSlider: string;

  slider: KeenSliderInstance | any = null;
  indexInitialSlide: number = Math.round(Math.random() * 4);


  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: 5,
      loop: true,
      mode: 'free-snap',
      dragSpeed: 0.8,
      slides: {
        perView: 3.5,
        spacing: 50
      },
      breakpoints: {
        '(max-width: 1500px)': {
          slides: {
            perView: 2.75,
            spacing: 50
          },
        },
        '(max-width: 1150px)': {
          slides: {
            perView: 1.95,
            spacing: 50
          },
        },
        '(max-width: 800px)': {
          slides: {
            perView: 1.18,
            spacing: 30
          },
        },
        '(max-width: 500px)': {
          slides: {
            perView: 1,
            spacing: 30
          },
        },
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  properties: Property[] = [];
  update: boolean = false

  constructor(private homeService: HomeService) {
    this.homeService.getAllProperties().subscribe((serverProperty) => {
      this.properties = serverProperty.slice().sort(() => Math.random() - 0.5);
      this.update = true;
    });

  }

  ngAfterViewChecked(): void{
    if(this.slider && this.update) {
      this.slider.update();
      this.update = false;
    }
  }
}
