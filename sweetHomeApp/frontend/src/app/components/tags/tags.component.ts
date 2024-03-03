import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() tagActive: string;

  svgBedroom = 'assets/Components/card/svgBedroom.svg';

  tags: Tag[] = [];

  constructor(private router: Router, homeService: HomeService, activatedRoute: ActivatedRoute) {
    homeService.getAllPropertiesTags().subscribe((serverTags) => {
      this.tags = serverTags;
      this.setActive(this.tagActive);
    });
  }

  clicked(tag: any){
    this.tagClicked.emit(tag.name);
    this.setActive(tag.name);
  }

  setActive(tagSearched: string) {
    this.tags.map((tag) => {
      tag.active = false;
      if (tag.name == tagSearched) {
        tag.active = true;
      }
    })
  }
}
