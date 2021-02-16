import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyTodoListState } from '../../../../root-store/my-todo-list/state/my-todo.state';
import { GetTodoItems } from '../../../../root-store/my-todo-list/actions/my-todo-list.actions';
import {
  MyTodoList,
} from '../../../../root-store/my-todo-list/state/my-todo-list-selectors.state';

@Component({
  selector: 'app-my-todo-list',
  templateUrl: './my-todo-list.component.html',
  styleUrls: ['./my-todo-list.component.scss']
})
export class MyTodoListComponent implements OnInit {

  constructor(
    private store: Store<MyTodoListState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetTodoItems());
    this.store.select(MyTodoList)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
