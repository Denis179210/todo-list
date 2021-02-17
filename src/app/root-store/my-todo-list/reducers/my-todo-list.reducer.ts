import { Action, createReducer, on } from '@ngrx/store';
import { MyTodoListInitialState, MyTodoListState } from '../state/my-todo.state';

import * as MyTodoListActions from '../actions/my-todo-list.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';

const todoItemAdapter = createEntityAdapter<TodoItemResponse>();
const getTodoListInitialState = todoItemAdapter.getInitialState(MyTodoListInitialState);

export const reducer = createReducer(getTodoListInitialState,
  on(MyTodoListActions.GetTodoItems, (state: MyTodoListState) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(MyTodoListActions.GetTodoItemsSuccess, (state: MyTodoListState, { todoItems }) => {
    return todoItemAdapter.addMany(todoItems,  {
      ...state,
      loading: true,
      loaded: false
    });
  }),
  on(MyTodoListActions.GetTodoItemsError, (state: MyTodoListState, { error }) => {
    console.error(error);
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(MyTodoListActions.CreateTodoItem, (state: MyTodoListState) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(MyTodoListActions.CreateTodoItemSuccess, (state: MyTodoListState, { todoItem }) => {
    return todoItemAdapter.addOne(todoItem,  {
      ...state,
      loading: true,
      loaded: false
    });
  }),
  on(MyTodoListActions.CreateTodoItemError, (state: MyTodoListState, { error }) => {
    console.error(error);
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(MyTodoListActions.UpdateTodoItem, (state: MyTodoListState) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),
  on(MyTodoListActions.UpdateTodoItemSuccess, (state: MyTodoListState, { todoItem }) => {
    const update = {
      id: todoItem.id,
      changes: {
        ...todoItem
      }
    }
    return todoItemAdapter.updateOne(update,  {
      ...state,
      loading: true,
      loaded: false
    });
  }),
  on(MyTodoListActions.UpdateTodoItemError, (state: MyTodoListState, { error }) => {
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


