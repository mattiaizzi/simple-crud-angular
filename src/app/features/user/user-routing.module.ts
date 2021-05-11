import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.components';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./pages/users-page/users-page.module').then(
            (m) => m.UsersPageModule
          ),
      },
      {
        path: 'new',
        pathMatch: 'full',
        loadChildren: () =>
          import('./pages/users-add-page/users-add-page.module').then(
            (m) => m.UsersAddPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
