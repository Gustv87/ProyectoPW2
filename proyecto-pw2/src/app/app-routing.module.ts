import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate:  [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate:  [AuthGuard], data: {adminRequired : true} },
  { path: 'teams', component: TeamsComponent ,canActivate:  [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
