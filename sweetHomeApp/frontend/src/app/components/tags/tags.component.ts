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
  @Output() tagClicked: EventEmitter<string> = new EventEmitter<string>();

  svgBedroom = 'assets/Components/card/svgBedroom.svg';

  tags: Tag[] = [];
  tagSearched: string = '';

  constructor(private router: Router, homeService: HomeService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.tagSearched = params.tagSearched;
    })

    homeService.getAllPropertiesTags().subscribe((serverTags) => {
      this.tags = serverTags;
      this.setActive();
    });
  }

  clicked(tag: any){
    console.log(this.tagSearched, this.tags);
    this.tagSearched = tag.name;
    this.tagClicked.emit(this.tagSearched);
    this.setActive();
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
