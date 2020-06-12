import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bands } from '../../assets/data/data-band';
import { Band } from 'src/app/band';

@Injectable({
  providedIn: 'root'
})

export class RockAppService {

  private collectionBand = Bands ;

  private bandUrl = 'api/bands';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };

  constructor(private http: HttpClient) {}

  /**
   * [get description]
   */
  get(): Band [] {
    return this.collectionBand;
  }

  /**
   * [getTop description]
   */
  getTop(idx: string) {
    return this.collectionBand[idx];
  }

  /**
   * [addBand description]
   */
  addBand( band: Band ) {
    return this.collectionBand.map((Band) => {
      return band;
    });
  }

  delete(band: Band) {
    this.collectionBand.splice(this.collectionBand.indexOf(band), 1);
    return this.collectionBand;
  }
  /**
   * [searchBand description]
   */
  searchBand(term: string) {
    let searchArr: Band[] = [];
    term = term.toLowerCase();

    for (let band of this.collectionBand) {
      let name = band.name.toLowerCase();
      if (name.indexOf(term) >= 0) {
        searchArr.push(band);
      }
    }
    return searchArr;
  }

}

