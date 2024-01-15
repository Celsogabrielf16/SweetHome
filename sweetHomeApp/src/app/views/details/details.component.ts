import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproperty } from 'src/app/interfaces/Iproperty';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  userId: number;
  infoProperty: Iproperty | undefined;

  svgBedroom = '../../../assets/Components/card/svgBedroom.svg';
  svgArea = '../../../assets/Components/card/svgArea.svg';
  svgBathroom = '../../../assets/Components/card/svgBathroom.svg';
  svgSpot = '../../../assets/Components/card/svgSpot.svg';

  constructor(private router: ActivatedRoute, private homeService: HomeService) {
    this.userId = this.router.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.infoProperty =  this.homeService.getOneProperty(this.userId);
  }
}
