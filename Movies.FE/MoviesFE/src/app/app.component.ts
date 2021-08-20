import { Component } from '@angular/core';
import { Movie } from './interfaces/movies.model';
import { MoviesService } from "./services/movies.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesFE';
  movies: Movie[] = [];
  oculto = 100;
  movieToSearch: string = '';

  constructor(
    private MoviesService: MoviesService
  ) { }

  getMovie(){
   this.MoviesService.getMoviesByTitle(this.movieToSearch)
       .subscribe(resp => {
          this.movies = resp;
          console.log("holi");
          console.log(this.movies);
       });
   }
}
