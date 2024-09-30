import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthenticationGuard implements CanActivate {
  constructor(
      private router: Router,
      private loginService: LoginService
  ){ }
  canActivate(): boolean {
    
    console.log('ejecutando guard!')
    const auth = this.loginService.isAuthenticated();
    if (auth) {
        console.log('usuario autenticado!')
        this.router.navigate(['/home']);
    }
    return !auth;
  }
}
