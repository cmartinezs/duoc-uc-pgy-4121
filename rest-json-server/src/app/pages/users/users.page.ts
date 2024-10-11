import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  private deleteUser(userId: number) {
    this.userService.deleteUser(userId)
    .subscribe(() => {
      console.log('User deleted');
      this.loadUsers()
    });
  }

  confirmDelete(userId: number) {
    this.alertController.create({
      header: 'Delete User',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.deleteUser(userId);
          }
        },
        {
          text: 'No'
        }
      ]
    }).then(alert => alert.present());
  }
}
