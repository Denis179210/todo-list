import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { MyTodoListState } from './my-todo.state';

import * as fromTodoList from '../reducers/my-todo-list.reducer';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { feature } from '../my-todo-list.feature';

const todoListFeatureState = createFeatureSelector(feature);

export const MyTodoList = createSelector(
  todoListFeatureState,
  fromTodoList.selectAll
);

export  const MyTodoListLoading = createSelector(
  todoListFeatureState,
  ({ loading, loaded }) => ({ loading, loaded })
);
