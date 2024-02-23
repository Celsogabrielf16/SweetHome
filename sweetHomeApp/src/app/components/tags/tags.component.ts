import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/property.service';
import { Tag } from 'src/app/shared/models/Tag';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  svgBedroom = 'assets/Components/card/svgBedroom.svg';

  tags?: Tag[];
  icons: Object | any = icons;

  constructor(private homeService: HomeService, private router: Router) {
    this.tags = homeService.getAllPropertiesTags();
  }

  clicked(tag: any){
    this.router.navigate(['search/tag/', tag.name]);
  }
}
