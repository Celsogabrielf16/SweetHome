import { Iproperty } from 'src/app/interfaces/Iproperty';
import { Component } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-property-registration',
  templateUrl: './property-registration.component.html',
  styleUrls: ['./property-registration.component.scss']
})
export class PropertyRegistrationComponent {
  infoProperty: Iproperty | any = [];
  openModal: boolean = false;
  iconsInputs: Object | any = icons;
  properties: Array<any>;

  constructor(private homeService: HomeService) {
    this.properties = homeService.getProperty();
  }

  changeStep(button: string) {
    let stepsProgress = Array.from(document.querySelectorAll<HTMLElement>(".step__item"));
    let steps = Array.from(document.querySelectorAll<HTMLElement>(".form__step"));

    const active = document.querySelector('form .form__step.active') as HTMLElement;

    let index: number = steps.indexOf(active);

    steps[index].classList.remove('active');
    stepsProgress[index].classList.remove('current-item');

    if (button === 'next') {
      steps[index    ].style.left = "-450px"
      steps[index    ].style.opacity = "0"
      steps[index + 1].style.left = "0px"
      steps[index + 1].style.opacity = "1"

      index++;

    } else if (button === 'prev') {
      steps[index - 1].style.left = "0px"
      steps[index - 1].style.opacity = "1"
      steps[index    ].style.left = "450px"
      steps[index    ].style.opacity = "0"

      index--;
    }

    steps[index].classList.add('active');
    stepsProgress[index].classList.add('current-item');
  }

  save() {
    console.log('Saved');
  }

  changeModal() {
    this.openModal = !this.openModal;
  }

  chosenProperty(numberProperty: number) {
    console.log(numberProperty);
  }
}
