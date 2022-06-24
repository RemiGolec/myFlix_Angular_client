import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  /**
   * navigates to user profile
   */
  openUserProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * navigates to movies main page (movie-card Component)
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * logs out user, deletes user name and token from local storage 
   */
  LogOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }


}
