import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/Modal';

const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  
  addUser(user: User): Observable<User> {
     return  this.http.post<User>(`${this.url}/addUser`, user);
  }

  editUser(user: User, idUser: number): Observable<User> {
     return  this.http.put<User>(`${this.url}/editUser/${idUser}`, user);
  }

  deleteUser(idUser: number): Observable<User> {
     return  this.http.delete<User>(`${this.url}/deleteUser/${idUser}`);
  }

  findByUsername(username: string): Observable<User> {
     return  this.http.get<User>(`${this.url}/findByUsername/${username}`);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public signOut() {
    window.sessionStorage.clear();
  }
}
