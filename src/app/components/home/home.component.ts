import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { RockAppService } from 'src/app/services/rockApp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Band } from 'src/app/band';
declare var _dbBands: null;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent {
  bands: Band[] = [];
  termino: string;
  bandSearch: any [];

  constructor(
    private rockAppService: RockAppService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) 
  {
    this.getBands();
  }

  /**
   * [getBands description]
   */
  getBands() {
    if (typeof globalThis._dbBands === 'undefined') 
      globalThis._dbBands = this.rockAppService.get();
  
    this.bands = globalThis._dbBands;
  }

  /**
   * [details description]
   */
  details(i){
    this.router.navigate(['/details', i]);
  }

  /**
   * [deleteBand description]
   */
  deleteBand(band: Band): void{
    this.rockAppService.delete(band);
    this.getBands();
  }
}