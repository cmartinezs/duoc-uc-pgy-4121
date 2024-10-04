import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonPlaceholderPageRoutingModule } from './json-placeholder-routing.module';

import { JsonPlaceholderPage } from './json-placeholder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonPlaceholderPageRoutingModule
  ],
  declarations: [JsonPlaceholderPage]
})
export class JsonPlaceholderPageModule {}
