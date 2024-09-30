import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private loginService: LoginService
    ){}

    canActivate() {
        console.log("Ejecutando guardian...")
        const auth = this.loginService.isAuthenticated();
        if(auth) {
            this.router.navigate(['/home'])
        }
        return !auth;
    }
}