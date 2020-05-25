import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  user = new BehaviorSubject<User>(null);

  saveUser(user: User): void {
    this.user.next(user);
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }
}
