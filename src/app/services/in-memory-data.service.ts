import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {

  /**
   * [createDb description]
   */
  createDb() {
    const bands = [
      {
        Id: 0,
        Name: 'The Rolling Stone',
        Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
        Image: '/assets/img/The_Rolling_Stones.jpg',
        OfficialSite: 'https://www.ramones.com/',
        Albums: [{
          Id: 1,
          Title: 'Some Girls',
          Summary: 'resumen del album',
          Music: [{
            Url: 'https://youtu.be/Uid7RrXBY2A',
          }]
        }]
      },
        {
          Id: 2,
          Name: 'Led Zeppelin',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/Led_Zeppelin.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
        {
          Id: 3,
          Name: 'Queen',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/queen.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
        {
          Id: 4,
          Name: 'Pin Floyd',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/Pink_Floyd1971.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
         {
          Id: 5,
          Name: 'Deep Purple',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/deep-purple-2020.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
        {
          Id: 6,
          Name: 'AC/DC',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/Ac-dc.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
        {
          Id: 7,
          Name: 'The Ramones',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/The_Ramones.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        },
         {
          Id: 8,
          Name: 'Kiss',
          Biography: 'The Rolling Stones, es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.',
          Image: '/assets/img/Kiss.jpg',
          Site: 'https://rollingstones.com/',
          Albums: [{
            Title: 'Some Girls',
            Summary: 'resumen del album',
            Image: '/assets/img/somegirls.jpg',
            Music: [{
              Url: 'https://youtu.be/Uid7RrXBY2A',
            }]
          }]
        }
    ];
    return {bands};
  }

}
