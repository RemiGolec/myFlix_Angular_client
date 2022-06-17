import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  movies: any[] = [];
  favouriteMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  // below function is going to be evoked ASA the component is created by Angular.
  ngOnInit(): void {
    this.getMovies();
    this.getFavouriteMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  getFavouriteMovies(): void {
    const user = localStorage.getItem('user');
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favouriteMovies = resp.FavouriteMovies;
      console.log('favourite movies:', this.favouriteMovies);
    });
  }

  isFavourite(id: string): boolean {
    return this.favouriteMovies.some((movieId) => movieId === id);
  }

  addToFavourites(id: string): void {
    this.fetchApiData.addFavouriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`movie has been added to your favourites`, 'OK', {
        duration: 4000,
      });
      this.getFavouriteMovies();
    })
  }

  removeFromFavourites(id: string): void {
    this.fetchApiData.removeFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`movie has been deleted from your favourites`, 'OK', {
        duration: 4000,
      });
      this.getFavouriteMovies();
    })
  }

  openMovieGenreDialog(name: string, description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px'
    });
  }

  openMovieSynopsisDialog(title: string, description: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: {
        Title: title,
        Description: description,
      },
      width: '500px'
    })
  }

  openMovieDirectorDialog(name: string, bio: string): void {
    this.dialog.open(MovieDirectorComponent, {
      data: {
        Name: name,
        Bio: bio
      },
      width: '500px'
    })
  }

}



