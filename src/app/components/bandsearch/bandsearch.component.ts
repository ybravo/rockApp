import { Component, OnInit, ViewChild} from '@angular/core';
import { RockAppService } from 'src/app/services/rockApp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Band } from '../../band';
import { Observable, Subject } from 'rxjs';
import {NgbModal, NgbModalConfig, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bandsearch',
  templateUrl: './bandsearch.component.html',
  styles: [
  ],
  providers: [NgbModalConfig, NgbModal]
})

export class BandsearchComponent implements OnInit {

  public bands: Band[] = [];
  public searchBands: any = {};
  public termino: string;
  public addModal: boolean;
  closeResult: string;

  constructor(
    private rockAppService: RockAppService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  )
  {}

  /**
   * [ngOnInit description]
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.searchBands = this.rockAppService.searchBand(params['termino']);
    });
  }
}




