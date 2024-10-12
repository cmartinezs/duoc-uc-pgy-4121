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
  async canActivate() {
    
    console.log('ejecutando no-guard!')
    const auth = await this.loginService.isAuthenticated();
    if (auth) {
        console.log('usuario está autenticado!')
        this.router.navigate(['/home']);
    }
    return !auth;
  }
}
