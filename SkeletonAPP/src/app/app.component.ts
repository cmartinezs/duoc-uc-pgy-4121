import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((ready) => {
      console.log("Platform ready: ", ready);
      this.storageService.init();
    });
  }
}
