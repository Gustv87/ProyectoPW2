import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';


@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    private baseUrl: string = "http://localhost:3000";
    private projectPath: string = "projects";


    constructor(private httpClient: HttpClient) {

    }

    getProjects() {
        return this.httpClient.get(`${this.baseUrl}/${this.projectPath}`);
    }



    addProjects(project: Project) {
        return this.httpClient.post(`${this.baseUrl}/${this.projectPath}`, project);

    }

}


