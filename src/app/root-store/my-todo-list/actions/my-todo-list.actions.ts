import { createAction, props } from '@ngrx/store';
import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoItemRequest } from '../../../shared/interfaces/request/todo-item.request';

const page = 'My Todo List';

export const GetTodoItems = createAction(`[${page}] Get TODO Items`);
export const GetTodoItemsSuccess = createAction(`[${page}] Get TODO Items Success`,
  props<{ todoItems: Array<TodoItemResponse> }>());
export const GetTodoItemsError = createAction(`[${page}] Get TODO Items Error`,
  props<{ error: HttpErrorResponse }>());

export const CreateTodoItem = createAction(`[${page}] Create TODO Item`,
  props<{ todoItem: { [key in keyof TodoItemRequest]?: any } }>());
export const CreateTodoItemSuccess = createAction(`[${page}] Create TODO Item Success`,
  props<{ todoItem: TodoItemResponse }>());
export const CreateTodoItemError = createAction(`[${page}] Create TODO Item Error`,
  props<{ error: HttpErrorResponse }>());

export const UpdateTodoItem = createAction(`[${page}] Update TODO Item`,
  props<{ todoItem: { [key in keyof TodoItemRequest]?: any } }>());
export const UpdateTodoItemSuccess = createAction(`[${page}] Update TODO Item Success`,
  props<{ todoItem: TodoItemResponse }>());
export const UpdateTodoItemError = createAction(`[${page}] Update TODO Item Error`,
  props<{ error: HttpErrorResponse }>());

export const RemoveTodoItem = createAction(`[${page}] Remove TODO Item`,
  props<{ id: string }>());
export const RemoveTodoItemSuccess = createAction(`[${page}] Remove TODO Item Success`,
  props<{ id: string }>());
export const RemoveTodoItemError = createAction(`[${page}] Remove TODO Item Error`,
  props<{ error: HttpErrorResponse }>());


