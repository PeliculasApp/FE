import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Actor, Genre } from '../interfaces/movies.model';
import { environment } from 'src/environments/environment';

const URL = environment.apiConfig.baseUri;

@Injectable({
    providedIn: 'root'
  })
export class MoviesService {
    constructor(
        private http: HttpClient
      ) { }
    /**Obtiene peliculas por el titulo */
    getMoviesByTitle(title: string){
        let query = `${URL}Movie/${title}/Title`;
        return this.http.get<Movie[]>(query);
    }
}