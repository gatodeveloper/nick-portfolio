import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  public get(item: string) {
    let value: any = localStorage.getItem(item);
    try {
      value = JSON.parse(value);
    }catch (e) {
      value = {}
    }
    return value;
  }

  public set(name, data) {
    try {
      localStorage.setItem(name, JSON.stringify(data));
      return true;
    } catch (e) {
      return false
    }
  }

  public remove(name) {
    try {
      localStorage.removeItem(name);
      return true;
    } catch (e) {
      return false;
    }
  }

}
