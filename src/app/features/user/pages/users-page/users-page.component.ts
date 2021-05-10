import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('onInit');
    this.userService.getUsers().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }
}
