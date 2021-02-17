import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';

import * as MyTodoListActions from '../actions/my-todo-list.actions';
import { MyTodoListService } from '../../../modules/my-todo-list/services/my-todo-list.service';
import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';
import { of } from 'rxjs';

@Injectable()
export class MyTodoListEffects {
  constructor(
    private actions$: Actions,
    private myTodoListService: MyTodoListService
  ) {}

  getTodoItems$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(MyTodoListActions.GetTodoItems),
        mergeMap(() =>
          this.myTodoListService.getTodoList()
            .pipe(
              pluck('data'),
              map((todoItems: Array<TodoItemResponse>) => MyTodoListActions.GetTodoItemsSuccess({ todoItems })),
              catchError((error) => of(MyTodoListActions.GetTodoItemsError({ error })))
            )
        )
      )
  )

  createTodoItems$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(MyTodoListActions.CreateTodoItem),
        mergeMap(({ todoItem: request }: any) =>
          this.myTodoListService.createTodoItem(request)
            .pipe(
              pluck('data'),
              map((todoItem: TodoItemResponse) => MyTodoListActions.CreateTodoItemSuccess({ todoItem })),
              catchError((error) => of(MyTodoListActions.CreateTodoItemError({ error })))
            )
        )
      )
  )

  editTodoItems$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(MyTodoListActions.UpdateTodoItem),
        mergeMap(({ todoItem: request }: any) =>
          this.myTodoListService.updateTodoItem(request)
            .pipe(
              pluck('data'),
              map((todoItem: TodoItemResponse) => MyTodoListActions.UpdateTodoItemSuccess({ todoItem })),
              catchError((error) => of(MyTodoListActions.UpdateTodoItemError({ error })))
            )
        )
      )
  )
}
