import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoListRoutingModule } from './my-todo-list-routing.module';
import { MyTodoListComponent } from './containers/my-todo-list/my-todo-list.component';


@NgModule({
  declarations: [MyTodoListComponent],
  imports: [
    CommonModule,
    MyTodoListRoutingModule
  ]
})
export class MyTodoListModule { }
