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

  openUserProfile(): void {
    this.router.navigate(['profile']);
  }

  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  LogOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }


}
