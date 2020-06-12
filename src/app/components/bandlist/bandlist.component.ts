import { Component, OnInit, Input } from '@angular/core';
import { Band } from 'src/app/band';
import { Router } from '@angular/router';
import { RockAppService } from '../../services/rockApp.service';

@Component({
  selector: 'app-bandlist',
  templateUrl: './bandlist.component.html',
  styles: []
})

export class BandlistComponent implements OnInit {

  bands: Band[] = [];
  @Input() items: any [];

  constructor(
    private router: Router,
    private rockAppService: RockAppService
  )
  {}

  ngOnInit(): void {}

  /**
   * [detailsBand description]
   */
  detailsBand(itemId: any){
    this.router.navigate(['/details', itemId]);
  }

  /**
   * [deleteBand description]
   */
  deleteBand(band: Band): void{
    this.items.splice(this.items.indexOf(band), 1);
    globalThis._dbBands.splice(this.items.indexOf(band), 1);
  }

}
