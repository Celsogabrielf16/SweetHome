import { Component } from '@angular/core';
import { Router } from '@angular/router';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  icons: Object | any = icons;

  infoInputs: any = [];

  constructor(private router: Router) {}

  search() {
    console.log(this.infoInputs);
    this.router.navigate(['/search']);
  }

}
