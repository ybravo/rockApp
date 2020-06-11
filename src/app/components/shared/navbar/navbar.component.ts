import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {NgbModal, NgbModalConfig, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: [NgbModalConfig, NgbModal]
})

export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
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

}

