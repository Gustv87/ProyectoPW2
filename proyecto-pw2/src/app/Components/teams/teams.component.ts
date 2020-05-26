import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/teamService';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Array<Team>;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getTeams()
      .subscribe((teams: Array<Team>) => {
        this.teams = teams;
      }, error => {
        alert('Error');
        console.log(error);
      })

  }

}
