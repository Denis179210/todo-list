import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTodoListComponent } from './containers/my-todo-list/my-todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyTodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTodoListRoutingModule { }
