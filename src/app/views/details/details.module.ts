import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MapComponent } from 'src/app/components/map/map.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ComponentsModule,
    MapComponent
  ]
})
export class DetailsModule {}
