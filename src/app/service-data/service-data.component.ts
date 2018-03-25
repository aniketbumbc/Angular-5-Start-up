import { Component, OnInit } from '@angular/core';
import{ MovieService } from '../movie.service';
import{Movie} from '../models/movies';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
movies:Movie[];
  constructor(private movieService:MovieService) { 

  }
getMovieFromService():void{
  this.movieService.getMovie();
}
  ngOnInit() {
    this.getMovieFromService();
  }

}
