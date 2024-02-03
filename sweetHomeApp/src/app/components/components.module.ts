import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    CardComponent,
    SliderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }
