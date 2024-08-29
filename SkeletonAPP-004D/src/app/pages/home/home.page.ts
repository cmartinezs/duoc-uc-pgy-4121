import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'guest'
  name: string = '';
  lastname: string = '';
  educationLevel: string = '';
  birthday: string = '';

  educationLevels: Map<string, string> = new Map<string, string>();

  constructor(
    private router: Router
  ) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if(state){
      this.username = state['user'];
    }

    this.educationLevels.set("pre","Pre Escolar");
    this.educationLevels.set("basic","Ed basica");
    this.educationLevels.set("medium","Ed Media");
    this.educationLevels.set("superior","Ed Superior");
    this.educationLevels.set("post","Postgrado");
    this.educationLevels.set("doctor","Doctorado");
  }

  ngOnInit() {
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.educationLevel = '';
    this.birthday = '';
  }

}
