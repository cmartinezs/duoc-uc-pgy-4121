import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      console.log(`User: ${state['user']}`)
    }
  }

}
