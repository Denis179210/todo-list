import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoListRoutingModule } from './my-todo-list-routing.module';
import { MyTodoListComponent } from './containers/my-todo-list/my-todo-list.component';
import { MyTodoListStateModule } from '../../root-store/my-todo-list/my-todo-list-state.module';


@NgModule({
  declarations: [MyTodoListComponent],
  imports: [
    CommonModule,
    MyTodoListRoutingModule,
    MyTodoListStateModule
  ]
})
export class MyTodoListModule { }
