import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit(): void { }

  login() {
    console.log(this.user);
    this._httpClient.post('http://localhost:3000/users/login',
      { "email": this.user.email, "password": this.user.password }).subscribe(result => {
        this.successMessage = "You are logged-in successfully!!."
        this.errorMessage = "";
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', this.user.email);
        window.location.reload();
      }, (error) => {
        if (error.status == 404) {
          this.errorMessage = error.error;
          this.successMessage = "";
        }
        else
          console.log(error);
      });
  }

}
