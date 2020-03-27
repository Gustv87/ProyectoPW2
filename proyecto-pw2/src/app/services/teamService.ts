import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class TeamService {
    private baseUrl: string = "http://localhost:3000";
  private teamsPath: string = "teams";

  constructor(private httpClient: HttpClient) { }

  getTeams() {
    return this.httpClient.get(`${this.baseUrl}/${this.teamsPath}`);
  }
}
