import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonPlaceholderPage } from './json-placeholder.page';

const routes: Routes = [
  {
    path: '',
    component: JsonPlaceholderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonPlaceholderPageRoutingModule {}
