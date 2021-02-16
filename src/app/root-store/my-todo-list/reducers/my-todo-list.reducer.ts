import { Action, createReducer, on } from '@ngrx/store';
import { MyTodoListInitialState, MyTodoListState } from '../state/my-todo.state';

import { GetTodoItems, GetTodoItemsSuccess, GetTodoItemsError } from '../actions/my-todo-list.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';

const todoItemAdapter = createEntityAdapter<TodoItemResponse>();
const getTodoListInitialState = todoItemAdapter.getInitialState(MyTodoListInitialState);

export const reducer = createReducer(getTodoListInitialState,
  on(GetTodoItems, (state: MyTodoListState) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(GetTodoItemsSuccess, (state: MyTodoListState, { todoItems }) => {
    return todoItemAdapter.addMany(todoItems,  {
      ...state,
      loading: true,
      loaded: false
    });
  }),
  on(GetTodoItemsError, (state: MyTodoListState, { error }) => {
    console.error(error);
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
);

export const {
  selectAll
} = todoItemAdapter.getSelectors();

export function myTodoReducer(state: MyTodoListState = MyTodoListInitialState, action: Action): MyTodoListState  {
  return reducer(state, action);
}


