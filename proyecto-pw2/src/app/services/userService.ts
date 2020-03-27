import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl: string = "http://localhost:3000";
  private usersPath: string = "users";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${this.baseUrl}/${this.usersPath}`);
  }

  postUser(users : User){
    return this.httpClient.post(`${this.baseUrl}/${this.usersPath}`, users);
    
}
}
