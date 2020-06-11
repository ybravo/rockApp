import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RockAppService } from 'src/app/services/rockApp.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {

  band: any = {};
 
  constructor(
    private rockAppService: RockAppService,
    private activatedRoute: ActivatedRoute,
  )
  {
    this.activatedRoute.params.subscribe(params => {
      this.band = this.rockAppService.getTop(params['id']);    
    });
  }

}
