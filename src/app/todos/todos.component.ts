import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todos.model';

@Component({
  selector: 'rb-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: '1',
      content: 'HELLO',
      title: 'WORLD',
      createdAt: new Date(),
      done: false
    },
    {
      id: '2',
      content: 'HELLO',
      title: 'WORLD',
      createdAt: new Date(),
      done: false
    }
  ];

  openIndex = -1;

  constructor() {}

  ngOnInit(): void {}

  openTodo(index: number) {
    this.openIndex = index;
  }

  closeTodo(index: number) {
    this.openIndex = -1;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
