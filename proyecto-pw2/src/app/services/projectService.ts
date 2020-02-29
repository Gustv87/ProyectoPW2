import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ProjectService {
    private baseUrl: string = "http://localhost:3000";
    private projectPath: string = "projects"; 

    constructor(private httpClient:HttpClient){ }

    getProjects(){
        return this.httpClient.get(`${this.baseUrl}/${this.projectPath}`);
    }
}


