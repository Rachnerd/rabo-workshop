import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todos.model';

@Component({
  selector: 'rb-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  @Input()
  showContent: boolean;

  @Output()
  openContent = new EventEmitter<void>();

  @Output()
  closeContent = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    if (this.showContent) {
      this.closeContent.emit();
    } else {
      this.openContent.emit();
    }
  }

  deleteTodo() {
    this.delete.emit();
  }
}
