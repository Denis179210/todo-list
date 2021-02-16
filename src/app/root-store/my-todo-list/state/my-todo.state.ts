import { EntityState } from '@ngrx/entity';

import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';

export interface MyTodoListState extends EntityState<TodoItemResponse> {
  loading: boolean;
  loaded: boolean;
}

export const MyTodoListInitialState: MyTodoListState =  {
  entities: {},
  ids: [],
  loading: false,
  loaded: false
};





