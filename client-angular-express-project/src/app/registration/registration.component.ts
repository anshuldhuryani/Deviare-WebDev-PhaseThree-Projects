import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.user);
    this._httpClient.post('http://localhost:3000/users', this.user).subscribe(result => {
      alert('User Registered Successfully.');
      console.log(result);
      this._router.navigate(['/home']);
    }, (error) => {
      console.log(error);
    })
  }

}
