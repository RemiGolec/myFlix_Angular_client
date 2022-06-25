import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router) { }
  ngOnInit(): void {
  }

  /**
   * sends the login form inputs to the backend
   * @function loginUser  
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
      console.log(response);
      // add user name and token to local Storage
      localStorage.setItem('user', response.user.Username);
      localStorage.setItem('token', response.token);
      // This will close the modal on success
      this.dialogRef.close();
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
      // redirects to main page (movies) with movie-cards
      this.router.navigate(['movies']);
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

}