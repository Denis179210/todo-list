import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { debounceTime, pluck } from 'rxjs/operators';
import { TodoItemRequest } from '../../../shared/interfaces/request/todo-item.request';

@Injectable()
export class MyTodoListService {
  constructor(
    private http: HttpClient // just to demonstrate it's DI for the future needs
  ) {}

  getTotoList() {

    /* TODO: invoke API call using http*/

    return of({
      data: [ /* <Array<TodoItemResponse> */]
    }).pipe(debounceTime(1000));
  }

  createTotoItem(payload: TodoItemRequest) {

    /* TODO: invoke API call using http*/

    return of({
      data: [ /* <Array<TodoItemResponse> */]
    }).pipe(pluck('data'));
  }

}
