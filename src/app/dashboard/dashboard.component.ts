import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/shared/todos.model';
import { TodosService } from '../todos/shared/todos.service';

@Component({
  selector: 'rb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  /**
   * Mind that this implementation is simplified and has some problems:
   * - Not SPA proof.
   * - Todos is not sharable.
   */
  ngOnInit(): void {
    this.todosService.get().subscribe(
      todos => (this.todos = todos),
      error => console.error('Failed to get todos', error)
    );
  }

  deleteTodo(todo: Todo) {
    this.todosService.delete(todo).subscribe(
      _ => {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },
      error => console.error('Failed to delete todo', error)
    );
  }
}
