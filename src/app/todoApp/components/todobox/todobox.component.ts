import { Component, inject } from '@angular/core';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todoApp-todobox',
  templateUrl: './todobox.component.html',
  styleUrls: ['./todobox.component.css']
})
export class TodoboxComponent {

  private todoService = inject( TodoService );

  createTask( content: any ){

    if( content.target.value === '' ) return;

    this.todoService.createTask( content.target.value );
    content.target.value = '';

  }

}
