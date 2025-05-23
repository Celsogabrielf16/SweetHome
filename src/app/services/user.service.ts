import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = "https://portfolio-api-pink-nine.vercel.app/user";
  private userSubject = new BehaviorSubject<User>(this.getUserToLocalStorage());
  public userObservable: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.httpClient.post<User>(`${this.URL}/login`, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        }
      })
    );
  }

  register(UserRegister: IUserRegister): Observable<User> {
    return this.httpClient.post<User>(`${this.URL}/register`, UserRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        }}),
        catchError((error) => {
          return throwError(() => error);
        })
    )
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem('User');
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  private getUserToLocalStorage(): User {
    const userJson = localStorage.getItem('User');
    return userJson ? JSON.parse(userJson) : new User();
  }
}
