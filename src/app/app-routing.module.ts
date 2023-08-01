import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'pipeInAngular',component:PipesComponent
  },
  {
    path:'directivesInAngular',component:DirectivesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
