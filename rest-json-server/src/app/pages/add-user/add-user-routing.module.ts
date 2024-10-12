import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserPage } from './add-user.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserPageRoutingModule {}
