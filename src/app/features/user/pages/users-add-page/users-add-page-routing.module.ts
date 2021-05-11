import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersAddPage } from './users-add-page.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersAddPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersAddPageRoutingModule {}
