import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MustMatch } from '../directives/must-match.validator';

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})

export class RegistrationReactiveComponent implements OnInit {

  userForm: FormGroup;
  submitted: boolean = false;
  user: User = new User();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') })
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.user);
  }

}
