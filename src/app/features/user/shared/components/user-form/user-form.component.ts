import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from '../../models/user';

export class CustomStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      isSubmitted &&
      (control.dirty || control.touched)
    );
  }
}

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
      .button-row {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      .button-container {
        padding: 0.5em;
      }
    `,
  ],
})
export class UserForm implements OnInit, OnChanges {
  @Input() user: User;
  @Input() title: string;

  @Output() onSubmit = new EventEmitter<User>();

  userForm: FormGroup;

  matcher = new CustomStateMatcher();

  firstSubmit = true;

  get form() {
    return this.userForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [-1],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: '',
        suite: '',
        city: '',
        zipcode: '',
      }),
    });
  }

  ngOnChanges() {
    if (!!this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  handleSubmit() {
    this.firstSubmit = false;
    if (this.userForm.valid) {
      this.onSubmit.emit(this.userForm.value);
    }
  }

  resetForm() {
    this.userForm.reset();
  }
}
