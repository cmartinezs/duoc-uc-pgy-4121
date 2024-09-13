import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router
    ){

    }

    canActivate(): boolean {
        console.log("Verificando acceso")
        const loggedUser = this.loginService.getLoggedUser();
        if(loggedUser !== undefined){
            console.log("usuario loggeado")
            return true;
        }

        console.log("No hay usuario")
        this.router.navigate(['/login']);
        return false;
    }
}