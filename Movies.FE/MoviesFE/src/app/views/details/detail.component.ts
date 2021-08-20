import { Component } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from "src/app/interfaces/movies.model";
import { MoviesService } from "../../services/movies.services";

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html'
})

export class DetailComponent {
    public idMovie?: string;
    search?: string;
    dataMovie: Movie | undefined ;

    constructor(private route : ActivatedRoute,
        private moviesService: MoviesService) {
    }

    ngOnInit(): void {
        this.idMovie = <string> this.route.snapshot.paramMap.get('idMovie');
        this.search = <string> this.route.snapshot.paramMap.get('search');
        console.log(this.search);
        this.getMovie();
    }
    /**Obtiene pelicula por id */
    getMovie(){
        this.moviesService.getMovieById(this.idMovie)
            .subscribe(resp => {
               console.log(resp);
               this.dataMovie = resp;
            });
        }
}