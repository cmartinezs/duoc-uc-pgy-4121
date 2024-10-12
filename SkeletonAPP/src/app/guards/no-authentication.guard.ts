import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthenticationGuard implements CanActivate {
  constructor(
      private readonly router: Router,
      private readonly loginService: LoginService
  ){ }
  async canActivate() {

    console.log('Executing no-guard!')
    const auth = await this.loginService.isAuthenticated();
    if (auth) {
        console.log('User is authenticated, redirecting to Home!')
        await this.router.navigate(['/home']);
    }
    return !auth;
  }
}
