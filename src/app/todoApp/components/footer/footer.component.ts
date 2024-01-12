import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'todoApp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements DoCheck {

  ngDoCheck(): void {
    this.counterView(); //Llamará el método cuando haya algún cambio
    this.displayFooter = this.todoService.tasks.length;
  }

  private todoService = inject( TodoService );
  private router = inject( Router );

  public displayFooter = this.todoService.tasks.length;

  public taskListLength = this.todoService.tasks.length;

  //counterView() analizará la url y filtrará los resultados para mostrar en contador según el estado
  counterView() {
    if (this.router.url.includes('all')) {
      this.taskListLength = this.todoService.tasks.length;
    } else if (this.router.url.includes('pending')) {
      this.taskListLength = this.todoService.tasks.filter(task => task.state === '').length
    } else if (this.router.url.includes('completed')) {
      this.taskListLength = this.todoService.tasks.filter(task => task.state === 'completed').length
    }
  }

  deleteCompletedTasks(){
    this.todoService.deleteCompletedTasks();
  }

}
