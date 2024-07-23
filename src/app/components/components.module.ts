import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    CardComponent,
    SliderComponent,
    SearchBarComponent,
    LoadingComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    SliderComponent,
    SearchBarComponent,
    LoadingComponent,
    TagsComponent
  ]
})
export class ComponentsModule { }
