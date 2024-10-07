import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
  }

  async init() {
    console.log('initializing storage...')
    const storage = await this.storage.create();
    this._storage = storage;
    console.log('initialized storage!')
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }
  remove(key: string) {
    this._storage?.remove(key);
  }
}
