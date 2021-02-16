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
          this.myTodoListService.getTotoList()
            .pipe(
              pluck('data'),
              map((todoItems: Array<TodoItemResponse>) => MyTodoListActions.GetTodoItemsSuccess({ todoItems })),
              catchError((error) => of(MyTodoListActions.GetTodoItemsError({ error })))
            )
        )
      )
  )
}
