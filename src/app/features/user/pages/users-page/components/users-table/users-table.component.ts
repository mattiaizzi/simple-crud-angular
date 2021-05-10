import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/features/user/models/user';

@Component({
  selector: 'users-user-table',
  templateUrl: './users-table.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
})
export class UsersTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() users: User[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  dataSource: MatTableDataSource<User>;

  displayedColumns: string[] = ['id', 'nome', 'username', 'email'];

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator = this.paginator;
  }
}
