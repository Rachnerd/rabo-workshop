import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TodosComponent, TodoComponent],
  exports: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TodosModule { }
