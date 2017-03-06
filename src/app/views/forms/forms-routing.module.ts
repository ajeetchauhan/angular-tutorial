import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InitialComponent } from './initialform/initial.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'initial',
    pathMatch: 'full'
  }, {
    path: 'initial',
    component: InitialComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
