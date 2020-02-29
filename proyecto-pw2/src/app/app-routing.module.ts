import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'projects', component:ProjectsComponent },
  {path: 'teams', component:TeamsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
