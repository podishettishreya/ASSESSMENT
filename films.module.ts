import { FilmComponent } from '../film/film.component';
import { FilmsComponent } from './films.component';
import { FilmsService } from './films.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FilmsComponent,FilmComponent],
  providers:[FilmsService],
  imports: [CommonModule],
  exports:[FilmsComponent]
})
export class FilmsModule { }
