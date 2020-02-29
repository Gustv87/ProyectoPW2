import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
