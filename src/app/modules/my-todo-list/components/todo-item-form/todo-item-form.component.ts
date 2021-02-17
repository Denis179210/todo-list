import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItemResponse } from '../../../../shared/interfaces/response/todo-item.response';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnInit {

  todoItemForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TodoItemFormComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const todoItem = this.data ? this.data.todoItem : {};
    this.buildForm(todoItem);
  }

  save() {
    this.dialogRef.close({
      todoItem: {
        ...this.todoItemForm.value
      }
    })
  }

  private buildForm(todoItem: TodoItemResponse) {
    const {
      id,
      description,
      name,
      createdAt,
      expiredAt,
      important
    } = todoItem;

    this.todoItemForm = this.fb.group({
      id: [id],
      description: [description],
      name: [name || 'test'],
      createdAt: [createdAt],
      expiredAt: [expiredAt],
      important: [important],
    })
  }

}
