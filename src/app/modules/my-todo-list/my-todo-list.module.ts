import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { MyTodoListRoutingModule } from './my-todo-list-routing.module';
import { MyTodoListComponent } from './containers/my-todo-list/my-todo-list.component';
import { MyTodoListStateModule } from '../../root-store/my-todo-list/my-todo-list-state.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoItemFormComponent } from './components/todo-item-form/todo-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MyTodoListComponent,
    TodoItemFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MyTodoListRoutingModule,
    MyTodoListStateModule
  ]
})
export class MyTodoListModule { }
