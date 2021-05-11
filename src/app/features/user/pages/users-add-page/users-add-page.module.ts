import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersAddPageRoutingModule } from './users-add-page-routing.module';

import { UsersAddPage } from './users-add-page.component';

@NgModule({
  declarations: [UsersAddPage],
  imports: [CommonModule, UsersAddPageRoutingModule, SharedModule],
  bootstrap: [UsersAddPage],
})
export class UsersAddPageModule {}
