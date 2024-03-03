import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/property.service';
import { TagService } from 'src/app/services/tag.service';
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
  tagActive: string;

  constructor(homeService: HomeService, private tagService: TagService) {
    homeService.getAllPropertiesTags().subscribe((serverTags) => {
      this.tags = serverTags;
      this.setActive();
    });
  }

  clicked(tag: any){
    this.tagService.updateTagActive(tag.name);
    this.tagClicked.emit(tag.name);
    this.setActive();
  }

  setActive() {
    this.tags.map((tag) => {
      tag.active = false;
      if (tag.name == this.tagService.tagActive) {
        tag.active = true;
      }
    })
  }
}
