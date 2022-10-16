import { FilmsService } from './films.service';

import { Component, OnInit } from '@angular/core'; 
import { Film } from 'src/app/interface/Film'; 

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[]=[];
  constructor(private filmsService:FilmsService) {

  }
  

  ngOnInit(): void {
    this.films=this.filmsService.getFilms();
  }

 

}
