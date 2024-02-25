import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/property.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Output() tagClicked = new EventEmitter<string>();

  svgBedroom = 'assets/Components/card/svgBedroom.svg';

  tags: Tag[];
  tagSearched: string = '';

  constructor(private router: Router, homeService: HomeService, private activatedRoute: ActivatedRoute) {
    this.tags = homeService.getAllPropertiesTags();
    this.getParams();
    this.setActive();
  }

  clicked(tag: any){
    this.tagSearched = tag.name;
    this.tagClicked.emit(this.tagSearched);
    this.setActive();
  }

  getParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.tagSearched = params.tagSearched;
    })
  }

  setActive() {
    this.tags.map((tag) => {
      tag.active = false;
      if (tag.name == this.tagSearched) {
        tag.active = true;
      }
    })
  }
}
