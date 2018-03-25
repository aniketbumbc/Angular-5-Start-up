import { Injectable } from '@angular/core';
import { newMovies } from './New-Movie';
import { Movie } from './models/movies';

// getting movies form local stoarage into services model and New-Movie
@Injectable()
export class MovieService {
  getMovie():Movie[]{
    return newMovies;
  }

  constructor() { }

}
