import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.page.html',
  styleUrls: ['./json-placeholder.page.scss'],
})
export class JsonPlaceholderPage implements OnInit {

  title!: string;
  body!: string;
  userId!: number;

  constructor(
    private api: JsonPlaceholderService
  ) { }

  createPost() {
    this.api.createPost(
      this.title,
      this.body,
      this.userId
    ).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
