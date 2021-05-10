import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.components';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, HttpClientModule],
  bootstrap: [UserComponent],
})
export class UserModule {}
