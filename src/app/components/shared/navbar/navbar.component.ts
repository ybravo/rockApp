import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {NgbModal, NgbModalConfig, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Band } from 'src/app/band';
import { RockAppService } from '../../../services/rockApp.service';
import { BandModel} from 'src/assets/data/bandModel';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: [NgbModalConfig, NgbModal]
})

export class NavbarComponent implements OnInit {

  public band: BandModel = new BandModel ();
  bands: any;
  modal: any;

  constructor(

    private router: Router,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private rockAppService: RockAppService,

  )
  {}

  /**
   * [ngOnInit description]
   */
  ngOnInit(): void {}

  /**
   * [searchBand description]
   */
  searchBand(termino: string) {
    this.router.navigate (['/search', termino]);
  }

  /**
   * [openModal description]
   */
  openModal(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop'});
  }

  /**
   * [openModal description]
   */

  add( addBand: NgForm ) {
   if ( addBand.invalid ) {

      Object.values( addBand.controls ).forEach( control => {
        control.markAsTouched();
      });

      return;
    }

    console.log( addBand.value );
    globalThis._dbBands.push(addBand.value );
    console.log( globalThis._dbBands );
  }


}
