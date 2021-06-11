import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'createUser', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
