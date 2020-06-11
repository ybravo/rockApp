export interface Band {
  Id: number;
  Name: string;
  Biography: string;
  Image: string;
  OfficialSite: string;
  Albums: [{
    Id: number;
    Title: string;
    Summary: string;
    Image:string;
    Music: [{
      Url: string;
    }];
  }];
}
