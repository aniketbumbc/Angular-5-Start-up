import { Injectable } from '@angular/core';
import { newMovies } from './New-Movie';
import { Movie } from './models/movies';
import { HttpClient } from '@angular/common/http';
import { Imovie } from './movieInterface';
import { Observable } from 'rxjs/Observable';

// getting movies form local stoarage into services model and New-Movie
@Injectable()
export class MovieService {
private _url:string= '../assets/data/info.json';

  constructor(private http:HttpClient) { }
  getMovie():Movie[]{
    return newMovies;
  }

  getHalfMovie():Observable<Imovie[]>{
    return this.http.get<Imovie[]>(this._url);
  }



}
