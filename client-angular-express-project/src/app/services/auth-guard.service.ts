import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
            return true;
        }
        this._router.navigate(['/login']);
    }
    isLoggedIn(): boolean {
        let status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        } else {
            status = false;
        }
        return status;
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', 'false');
        this._router.navigate(['/login']);
    }
}