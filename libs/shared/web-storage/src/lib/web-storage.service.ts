import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  static setItem(
    key: string,
    data: string,
    storage: Storage = sessionStorage
  ): void {
    const dataEncrypted = this.encrypt(data);
    const keyEncrypted = this.encrypt(key);
    storage.setItem(keyEncrypted, dataEncrypted);
  }

  static getItem(
    key: string,
    storage: Storage = sessionStorage
  ): string | null {
    const keyEncrypted = this.encrypt(key);
    const dataEncrypted = storage.getItem(keyEncrypted);
    if (dataEncrypted) {
      return this.decrypt(dataEncrypted);
    }
    return null;
  }

  static removeItem(key: string, storage: Storage = sessionStorage): void {
    const keyEncrypted = this.encrypt(key);
    storage.removeItem(keyEncrypted);
  }

  private static encrypt(data: string): string {
    return window.btoa(data);
  }

  private static decrypt(encryptedData: string): string {
    return window.atob(encryptedData);
  }
}
