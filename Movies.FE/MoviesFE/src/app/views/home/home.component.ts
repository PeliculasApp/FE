import { Component } from "@angular/core";
import { Movie } from '../../interfaces/movies.model';
import { MoviesService } from "../../services/movies.services";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./home.component.html',
    //providers: [MoviesService]
})

export class HomeComponent{
    title = 'MoviesFE';
    movies: Movie[] = [];
    oculto = 100;
    movieToSearch: string = '';
    constructor(
        private MoviesService: MoviesService,
        private route : ActivatedRoute
      ) { }
    ngOnInit(): void {
        this.movieToSearch = <string> this.route.snapshot.paramMap.get('movieToSearch');
        if(this.movieToSearch != undefined){
            this.getMovie();
        }
    }
  getMovie(){
   this.MoviesService.getMoviesByTitle(this.movieToSearch)
       .subscribe(resp => {
          this.movies = resp;
          console.log(this.movies);
       });
   }
}