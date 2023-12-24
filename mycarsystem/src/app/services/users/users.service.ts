import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  create(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  update(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
