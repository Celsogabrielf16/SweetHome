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

  slider: KeenSliderInstance | any = null;

  @Input() titleSlider: string;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      slides: {
        perView: 4.5,
        spacing: 50
      },
      breakpoints: {
        '(max-width: 1500px)': {
          slides: {
            perView: 3.5,
            spacing: 50
          },
        },
        '(max-width: 1150px)': {
          slides: {
            perView: 2.5,
            spacing: 50
          },
        },
        '(max-width: 800px)': {
          slides: {
            perView: 1.5,
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
    if (this.slider) this.slider.destroy()
  }

  properties: Property[] = [];

  constructor(private homeService: HomeService) {
    homeService.getAllProperties().subscribe((serverProperty) => {
      this.properties = serverProperty;
    });
  }
}
