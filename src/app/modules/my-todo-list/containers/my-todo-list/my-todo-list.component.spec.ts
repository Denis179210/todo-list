import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoListComponent } from './my-todo-list.component';

describe('MyTodoListComponent', () => {
  let component: MyTodoListComponent;
  let fixture: ComponentFixture<MyTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
