import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projectService';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project>;
  project = new Project();


  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.loadProjects();

  }

  loadProjects(): void {
    this.projectService.getProjects()
      .subscribe((projects: Array<Project>) => {
        this.projects = projects;
      }, error => {
        alert('Error');
        console.log(error);
      })
  }

  addProject(): void {
    this.projectService.addProjects(this.project)
      .subscribe((projects: Project) => {
        alert('Se agrego el proyecto exitosamente');
        this.projects.push(projects);
      }, error => {
        alert('Error');
        console.log(error);
      })
  }
}
