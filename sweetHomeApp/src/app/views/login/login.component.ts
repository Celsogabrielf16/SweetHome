import { Component } from '@angular/core';
import { Property } from 'src/app/classes/Property';
import { Iproperty } from 'src/app/interfaces/Iproperty';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  iconsInputs: Object | any = icons;

  newProperty: Iproperty = new Property;
}
