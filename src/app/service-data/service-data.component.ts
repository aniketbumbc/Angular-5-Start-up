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
listmoive:any;
jsonmovies:any;

  constructor(private movieService:MovieService) { }
getMovieFromService():void{
  console.log("Hello");
 // debugger;
 var movieList = this.movieService.getMovie();
  console.log ( "List of movie " , movieList);
  
}
 ngOnInit() {
    this.getMovieFromService();
    console.log (this.movieService.getHalfMovie()
    .subscribe(data => this.jsonmovies = data));
  }

}
