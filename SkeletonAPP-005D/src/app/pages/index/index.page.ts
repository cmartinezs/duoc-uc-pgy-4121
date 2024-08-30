import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  username!: string;
  birthday!: string;


  constructor(
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state
    console.log('state: ' + JSON.stringify(state))
    if(state){
      this.username = state['username']
    }
  }

  ngOnInit() {
  }

}
