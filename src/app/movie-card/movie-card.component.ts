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

  /**
   * Gets movies from api call and sets the movies state to return JSON file
   * @returns array holding movies objects
   * @function getAllMovies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Gets favorite movies from api call and sets the favorite movies variable to return JSON file
   * @returns array holding ids of user's favorite movies
   * @function getFavoriteMovies
   */
  getFavouriteMovies(): void {
    const user = localStorage.getItem('user');
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favouriteMovies = resp.FavouriteMovies;
      console.log('favourite movies:', this.favouriteMovies);
    });
  }

  /**
   * checks if a movie is included in the user's list of favorite movies
   * @param id 
   * @returns true, if the movie is a favorite move, else false
   */
  isFavourite(id: string): boolean {
    return this.favouriteMovies.some((movieId) => movieId === id);
  }

  /**
   * adds a movie to the list of favourite movies via an API call
   * @param id 
   * @function addToFavourites
   */
  addToFavourites(id: string): void {
    this.fetchApiData.addFavouriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`movie has been added to your favourites`, 'OK', {
        duration: 4000,
      });
      this.getFavouriteMovies();
    })
  }

  /**
   * removes movie from the list of favourite movies via an API call
   * @param id 
   * @function removeFromFavourites
   */
  removeFromFavourites(id: string): void {
    this.fetchApiData.removeFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`movie has been deleted from your favourites`, 'OK', {
        duration: 4000,
      });
      this.getFavouriteMovies();
    })
  }

  /**
   * opens the user genre dialog from Movie-Genre Component to displaying details
   * @param name 
   * @param description 
   * @function openMovieGenreDialog
   */
  openMovieGenreDialog(name: string, description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px'
    });
  }

  /**
   * opens movie storyline dialog from movie-Synopsis Component to display details
   * @param title 
   * @param description 
   * @function openMovieSynopsisDialog
   */
  openMovieSynopsisDialog(title: string, description: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: {
        Title: title,
        Description: description,
      },
      width: '500px'
    })
  }

  /**
   * opens movie director bio dialog from movie-director to display details
   * @param name 
   * @param bio 
   * @function openMovieDirectorDialog
   */
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



