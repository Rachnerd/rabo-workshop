import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('assets/todos.json');
  }

  delete(todo: Todo): Observable<string> {
    // Mocked delete implementation
    return of(todo.id);
  }
}
