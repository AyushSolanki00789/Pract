import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: 'app-login-signup', component: LoginSignupComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-graph', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginSignupComponent, HomeComponent, GraphComponent]
