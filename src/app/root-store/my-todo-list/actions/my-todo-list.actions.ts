import { createAction, props } from '@ngrx/store';
import { TodoItemResponse } from '../../../shared/interfaces/response/todo-item.response';
import { HttpErrorResponse } from '@angular/common/http';

const page = 'My Todo List';

export const GetTodoItems = createAction(`[${page}] Get TODO Items`);
export const GetTodoItemsSuccess = createAction(`[${page}] Get TODO Items Success`,
  props<{ todoItems: Array<TodoItemResponse>}>());
export const GetTodoItemsError = createAction(`[${page}] Get TODO Items Error`,
  props<{ error: HttpErrorResponse }>());

export const CreateTodoItem = createAction(`[${page}] Create TODO Item`);
export const CreateTodoItemSuccess = createAction(`[${page}] Create TODO Item Success`);
export const CreateTodoItemError = createAction(`[${page}] Create TODO Item Error`);

export const UpdateTodoItem = createAction(`[${page}] Update TODO Item`);
export const UpdateTodoItemSuccess = createAction(`[${page}] Update TODO Item Success`);
export const UpdateTodoItemError = createAction(`[${page}] Update TODO Item Error`);

export const RemoveTodoItem = createAction(`[${page}] Remove TODO Item`);
export const RemoveTodoItemSuccess = createAction(`[${page}] Remove TODO Item Success`);
export const RemoveTodoItemError = createAction(`[${page}] Remove TODO Item Error`);

export const SellBitcoin = createAction(`[${page}] Sell Bitcoin`);

