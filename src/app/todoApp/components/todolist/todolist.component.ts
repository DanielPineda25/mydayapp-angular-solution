import { Component, DoCheck, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todoApp-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements DoCheck {

  ngDoCheck(): void {
    this.displaySection = this.todoService.tasks.length;
  }

  private todoService = inject( TodoService );

  public displaySection = this.todoService.tasks.length;

}
