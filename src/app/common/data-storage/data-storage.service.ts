import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private user: Subject<User> = new Subject<User>();

  constructor() { }

  saveUser(user: User): void {
    this.user.next(user);
  }

  getUser(): Subject<User> {
    return this.user;
}
}
