import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  
  constructor() { }
  login(username: string, password: string) : Promise<boolean>{
    this.currentUser.next({username})
    return Promise.resolve(true)
  }
  logout() : Promise<void> {
    this.currentUser.next(null)
    return Promise.resolve()
  }
  getUser() : Observable<User>{
    return this.currentUser
  }
}
