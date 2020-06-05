import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormStartComponent } from './components/form-start/form-start.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormDetailComponent } from './components/form-detail/form-detail.component';


const routes: Routes = [
  {  
    path: "start",
    component: FormStartComponent
  },
  {
    path: ":id",
    component: FormDetailComponent
  },
  {
    path: "",
    component: TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
