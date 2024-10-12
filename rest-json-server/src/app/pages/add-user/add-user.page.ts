import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  addUser() {
    const newUser = {
      id: "9",
      username: "lserrano",
      name: "Luisa",
      lastname: "Serrano",
      email: "luisa@example.com",
      age: 38
    }
    this.userService.postUser(newUser).subscribe(user => {
      console.log('User added',user);
    });
  }
}
