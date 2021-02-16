import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
  {
    path: '',
    redirectTo: 'my-todo-list',
    pathMatch: 'full'
  },
  {
    path: 'my-todo-list',
    loadChildren: () => import( './modules/my-todo-list/my-todo-list.module').then(m => m.MyTodoListModule)
  }
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
