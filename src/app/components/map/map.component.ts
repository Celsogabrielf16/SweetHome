import { Component, Input, SimpleChanges } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  @Input() latitude!: number;
  @Input() longitude!: number;

  center!: google.maps.LatLngLiteral;
  zoom = 14;

  options: google.maps.MapOptions = {
    mapId: "2e60ad0783128a85",
    mapTypeId: 'hybrid'
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['latitude'] || changes['longitude']) {
      this.updateCenter();
    }
  }

  updateCenter() {
    this.center = {
      lat: this.latitude,
      lng: this.longitude
    };
  }
}
