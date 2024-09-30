import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'guest';
  name!: string;
  lastname!: string;
  edLevel!: string;
  birthday!: string;
  edLevels: Map<string, string> = new Map<string, string>
  alertButtons = ['Ok'];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    const loggedUser = this.loginService.getLoggedUser()
    if(loggedUser){
      this.username = loggedUser.username;
    }

    this.edLevels.set('-1', 'Pre Basica');
    this.edLevels.set('0', 'Basica');
    this.edLevels.set('1', 'Media');
    this.edLevels.set('2', 'Superior');
    this.edLevels.set('3', 'Magister');
    this.edLevels.set('4', 'Doctorado');
  }

  ngOnInit() {
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
    this.birthday = '';
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
