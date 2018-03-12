import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1001,
    name: 'Star Wars',
    releaseYear: 2004,
    status: 'Good'
  }
  constructor() { }

  ngOnInit() {
  }

}
