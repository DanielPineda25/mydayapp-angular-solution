import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

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

  constructor(){
    this.todoService.loadLocalStorage();
  }

  private todoService = inject( TodoService );

  public displayFooter = this.todoService.tasks.length;

  public taskListLength = this.todoService.tasks.length;

  public itemsMap = {
    '=1': 'item',
    'other': 'items',
  }

  //counterView() analizará la url y filtrará los resultados para mostrar en contador según el estado
  counterView() {
    // if (this.router.url.includes('all')) {
    //   this.taskListLength = this.todoService.tasks.length;
    // } else if (this.router.url.includes('pending')) {
    //   this.taskListLength = this.todoService.tasks.filter(task => task.state === '').length
    // } else if (this.router.url.includes('completed')) {
    //   this.taskListLength = this.todoService.tasks.filter(task => task.state === 'completed').length
    // }

    //Solo necesito que se analice las tareas que hacen falta
    this.taskListLength = this.todoService.tasks.filter(task => task.state === '' || task.state === 'editing' ).length
  }

  deleteCompletedTasks(){
    this.todoService.deleteCompletedTasks();
  }

}
