import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = 'guest';
  name!: string;
  lastname!: string;
  edLevel!: string;
  birthday!: string;

  constructor(
    private router: Router
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      console.log(`User: ${state['user']}`)
      this.username = state['user'];
    }
  }

}
