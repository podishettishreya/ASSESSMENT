import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  getFilms(){
    return[
      {
        name:'Jaws',
        genre:'Adventure/Thriller',
        poster:'https://imgc.allpostersimages.com/img/posters/jaws-one-sheet-premium-poster_u-L-F9TNJY0.jpg',
        amount: 350
      },
      {
        name:'Joker',
        genre:'Thriller/Crime',
        poster:'https://imgc.allpostersimages.com/img/posters/joker_u-L-F9JL6C0.jpg',
        amount: 250
      },
      {
        name:'The Terminator',
        genre:'Scifi/Action',
        poster:'https://imgc.allpostersimages.com/img/posters/the-terminator-1984-directed-by-james-cameron_u-L-Q1H6WXI0.jpg',
        amount: 200
      },
      
      {
        name:'Home Alone',
        genre:'Comedy/Family',
        poster:'https://imgc.allpostersimages.com/img/posters/home-alone_u-L-F4S7IN0.jpg',
        amount:150
      }
    ];
  }
}
