import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyTodoListState } from '../../../../root-store/my-todo-list/state/my-todo.state';
import * as MyTodoListActions from '../../../../root-store/my-todo-list/actions/my-todo-list.actions';
import {
  MyTodoList,
} from '../../../../root-store/my-todo-list/state/my-todo-list-selectors.state';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TodoItemFormComponent } from '../../components/todo-item-form/todo-item-form.component';
import { TodoItemResponse } from '../../../../shared/interfaces/response/todo-item.response';

@Component({
  selector: 'app-my-todo-list',
  templateUrl: './my-todo-list.component.html',
  styleUrls: ['./my-todo-list.component.scss']
})
export class MyTodoListComponent implements OnInit {
  displayedColumns = [
    'name',
    'description',
    'createdAt',
    'expiredAt',
    'completedAt',
    'important',
    'action'
  ];

  dataSource$: Observable<MatTableDataSource<any>>;

  constructor(
    private store: Store<MyTodoListState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(MyTodoListActions.GetTodoItems());
    this.dataSource$ = this.store.select(MyTodoList).pipe(map( data => new MatTableDataSource(data)), tap(console.log));
  }

  createTodo() {
    this.dialog.open(TodoItemFormComponent)
      .afterClosed()
      .pipe(
        filter(v => !!v)
      )
      .subscribe((todoItem: any) => {
        this.store.dispatch(MyTodoListActions.CreateTodoItem({ todoItem }));
      })
  }

  editTodo(todoItem: TodoItemResponse) {
    this.dialog.open(TodoItemFormComponent, {
      data: {
        todoItem
      }
      })
      .afterClosed()
      .subscribe((todoItem: any) => {
        this.store.dispatch(MyTodoListActions.UpdateTodoItem({ todoItem }));
      })
  }

  removeTodo() {

  }

}
