import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styles: [
    `
      .container {
        padding: 1em;
      }
      .user-form-row {
        display: flex;
      }
      .user-form-field {
        width: 100%;
        padding: 0 1em;
      }
      mat-form-field {
        width: 100% !important;
      }
    `,
  ],
})
export class UserForm implements OnInit {
  @Input()
  user: User;

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userForm.getRawValue());
  }
}
