import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailPage } from './character-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDetailPageRoutingModule {}
