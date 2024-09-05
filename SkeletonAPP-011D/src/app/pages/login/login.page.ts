import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  mainTitle: string;
  subTitle: string;
  username!: string;
  password!: string;

  constructor() {
    this.mainTitle = 'SkeletonAPP-008V!';
    this.subTitle = 'Aqui comienza todo desde nG';
  }

}
