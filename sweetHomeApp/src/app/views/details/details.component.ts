import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproperty } from 'src/app/interfaces/Iproperty';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  userId: number;
  infoProperty: Iproperty | undefined;

  svgBedroom = '../../../assets/icons/bedroom.png';
  svgArea = '../../../assets/icons/uf.png';
  svgBathroom = '../../../assets/icons/bathroom.png';
  svgSpot = '../../../assets/icons/spot.png';

  constructor(private router: ActivatedRoute, private homeService: HomeService) {
    this.userId = this.router.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.infoProperty =  this.homeService.getPropertyByID(this.userId);
  }
}
