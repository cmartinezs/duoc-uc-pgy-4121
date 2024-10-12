import {Injectable, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private readonly storage: Storage) { }

  async init(): Promise<void> {
    await this.initializeStorage();
  }

  private async initializeStorage(): Promise<void> {
    this._storage = await this.storage.create();
  }

  async get(key: string) {
    return this._storage?.get(key);
  }

  async set(key: string, value: any) {
    return this._storage?.set(key, value);
  }

  async remove(key: string) {
    await this._storage?.remove(key);
  }
}
