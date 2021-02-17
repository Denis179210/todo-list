import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { debounceTime, pluck, tap } from 'rxjs/operators';
import { TodoItemRequest } from '../../../shared/interfaces/request/todo-item.request';

@Injectable()
export class MyTodoListService {
  constructor(
    private http: HttpClient // just to demonstrate it's DI for the future needs
  ) {}

  getTodoList() {

    /* TODO: invoke GET API call using http*/

    return of({ /* <Array<TodoItemResponse> */
      data: [
        {
          id: `_${Math.random().toString(36).substr(2, 9)}`,
          name: 'Test',
          description: 'Complete a test ASAP',
          expiredAt: '',
          completedAt:  '',
          createdAt:  '',
          important: true
        }
      ]
    }).pipe(debounceTime(1000));
  }

  createTodoItem({ todoItem }: any) {

    /* TODO: invoke POST API call using http*/
    return of({
      data: {
        ...todoItem,
        id: `_${Math.random().toString(36).substr(2, 9)}`
      }
    }).pipe(debounceTime(1000));
  }

  updateTodoItem({ todoItem }: any) {

    /* TODO: invoke PATCH API call using http*/
    return of({
      data: {
        ...todoItem,
      }
    }).pipe(debounceTime(1000));
  }

}
