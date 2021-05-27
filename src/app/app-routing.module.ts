import { SignpageComponent } from './signpage/signpage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { FloatbtnComponent } from './floatbtn/floatbtn.component';
import { TaskviewComponent } from './taskview/taskview.component';


const routes: Routes = [
 { path: '', component: SignpageComponent},
 { path: 'TaskPage', component: TaskviewComponent},
 { path: 'floatingPage', component: FloatbtnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
