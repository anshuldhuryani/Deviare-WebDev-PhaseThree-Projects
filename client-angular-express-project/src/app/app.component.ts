import { AuthGuard } from './services/auth-guard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginStatus: boolean = false;
  constructor(private _authGuard: AuthGuard) { }

  logout() {
    this._authGuard.logout();
  }

  ngOnInit(): void {
    this.checkStatus();
  }

  checkStatus() {
    if (this._authGuard.isLoggedIn()) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

}
