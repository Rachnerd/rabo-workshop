import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './shared/todos.model';

@Component({
  selector: 'rb-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  deleteTodo = new EventEmitter<number>()

  openedTodo = undefined;

  constructor() {}

  ngOnInit(): void {}

  openTodo(todo: Todo) {
    this.openedTodo = todo;
  }

  closeTodo() {
    this.openedTodo = undefined;
  }
}
