import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverGuard } from './guards/user-resolver.guard';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  {
    path: ':id',
    component: UserFormComponent,
    resolve: { user: UserResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
