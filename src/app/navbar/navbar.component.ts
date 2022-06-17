import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openUserProfile(): void {
    this.dialog.open(UserProfileComponent, {
      // data: {
      //   Name: name,
      // },
      width: '500px'
    })
  }

}
