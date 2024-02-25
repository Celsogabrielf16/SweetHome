import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyRegistrationComponent } from './property-registration.component';
import { CommonModule } from '@angular/common';
import { PropertyRegistrationRoutingModule } from './property-registration-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PropertyRegistrationComponent
  ],
  imports: [
    CommonModule,
    PropertyRegistrationRoutingModule,
    FormsModule
  ]
})

export class PropertyRegistrationModule { }
