import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  username!: string;
  name!: string;
  lastname!: string;
  edLevel!: string;
  birthday!: string;

  constructor(
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      console.log(`Username: ${state['user']}`)
      this.username = state['user']
    }
  }

  ngOnInit() {
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
    this.birthday = '';
  }
}
