import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieService} from './movie.service';
import { ServiceDataComponent } from './service-data/service-data.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ServiceDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
