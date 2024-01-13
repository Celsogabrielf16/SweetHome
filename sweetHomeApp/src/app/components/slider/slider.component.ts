import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { HomeService } from 'src/app/service/home.service';

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
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  infoProperty: any = [];

  constructor(private homeService: HomeService) {
    this.infoProperty = homeService.getProperty();
  }
}
