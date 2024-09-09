import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ){ }
    canActivate(): boolean {
        console.log('ejecutando guard!')
        const auth = this.loginService.isAuthenticated();
        if (!auth) {
            console.log('usuario no autenticado!')
            this.router.navigate(['/login']);
        }
        return auth;
    }
}