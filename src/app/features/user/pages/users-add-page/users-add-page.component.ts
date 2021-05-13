import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'users-add-page',
  templateUrl: './users-add-page.component.html',
})
export class UsersAddPage {
  title = 'aggiungi un nuovo utente';

  constructor(private userService: UserService, private router: Router) {}

  saveUser(user: User) {
    this.userService
      .saveUser(user)
      .subscribe((user) => this.router.navigate(['']));
  }
}
