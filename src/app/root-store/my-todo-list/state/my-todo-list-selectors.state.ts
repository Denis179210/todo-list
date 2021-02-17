import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodoList from '../reducers/my-todo-list.reducer';
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
