import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { feature } from './my-todo-list.feature';
import { myTodoReducer } from './reducers/my-todo-list.reducer';
import { MyTodoListService } from '../../modules/my-todo-list/services/my-todo-list.service';
import { EffectsModule } from '@ngrx/effects';
import { MyTodoListEffects } from './effects/my-todo-list.effects';


@NgModule({
  imports: [
    StoreModule.forFeature(feature, myTodoReducer),
    EffectsModule.forFeature([ MyTodoListEffects ])
  ],
  providers: [ MyTodoListEffects, MyTodoListService ]
})
export class MyTodoListStateModule {}

