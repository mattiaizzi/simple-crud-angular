import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersPage } from './users-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersPageRoutingModule } from './users-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UsersTableComponent, UsersPage],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    UsersPageRoutingModule,
    SharedModule,
  ],
  bootstrap: [UsersPage],
})
export class UsersPageModule {}
