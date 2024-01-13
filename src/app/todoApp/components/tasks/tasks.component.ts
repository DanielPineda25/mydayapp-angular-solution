import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { StateTask } from '../../interfaces/stateTask.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todoApp-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
    this.tasks = this.todoService.tasks;
    this.filterTasks();
  }

  ngOnInit(): void {
  //this.filterTasks(); // cada que se cree el componente, verificará
  }

  private todoService = inject( TodoService ); // inyectar el servicio

  private router = inject( Router ) // inyectar el router para trabajar con la url

  public tasks: StateTask[] = this.todoService.tasks; // acceder a las tareas del servicio

  filterTasks1: StateTask[] = []; // copia filtrada de las tareas, según su clase

  //filterTasks() filtrará las tareas a mostrar por clase, según la url donde esté (optimizar código)
  filterTasks() {
    if (this.router.url.includes('all')) {
      this.filterTasks1 = this.tasks.filter(task => task.state === '' || task.state === 'completed'|| task.state === 'editing');
    } else if (this.router.url.includes('pending')) {
      this.filterTasks1 = this.tasks.filter(task => task.state === '' || task.state === 'editing');
    } else if (this.router.url.includes('completed')) {
      this.filterTasks1 = this.tasks.filter(task => task.state === 'completed' || task.state === 'editing');
    }
  }

  //toggleSelection() verifica si un input fue checked y teniendo en cuenta su id, actualizará su info
  toggleSelection( id:number, event:any ): void {

    if( event.target.checked ){
      this.tasks.find(task => task.id === id)!.state = 'completed';
      this.tasks.find(task => task.id === id)!.checked = true;
      this.filterTasks();
      this.todoService.saveLocalStorage();
    } else{
      this.tasks.find(task => task.id === id)!.state = '';
      this.tasks.find(task => task.id === id)!.checked = false;
      this.filterTasks();
      this.todoService.saveLocalStorage();
    }

  }

  deleteTask( i: any){
    this.todoService.deleteTask(i);
  }

  public modeEdit: boolean = false;
  public textContent: string = '';

  public idForChange: number = 0;
  public contentTask: string = '';
  public confirmTask: boolean = false;

  //Esto de aqui para abajo debería ir en el servicio

  //Se entra en modo edicion, sobrepone el input para escribir
  editTask(id: any, event: any){

    this.modeEdit = true;
    this.filterTasks1.find(task => task.id === id)!.state = 'editing';
    this.textContent = (event.target as HTMLLabelElement).textContent!.trim();
    this.idForChange = id;

    setInterval(()=>{
      this.inputFocus(id)
    },100)

  }

  //Se guarda el contenido del input con la tarea nueva
  newTask( content: any ){
    if( content.target.value === '' ) return;
    this.contentTask = content.target.value
    this.confirmTask = true;
    this.createNewTask(this.idForChange)
  }

  //Se le asigna el nuevo contenido al mismo elemento que se había ocultado
  createNewTask( id: any){

    if( this.confirmTask ){

      this.filterTasks1.find(task => task.id === id)!.task = this.contentTask;
      this.filterTasks1.find(task => task.id === id)!.state = '';
      this.filterTasks1.find(task => task.id === id)!.checked = false;
      this.modeEdit = false;
      this.todoService.saveLocalStorage();

    }
  }

  //Se anula el modo de edicion y se vuelve al estado pending
  onBlur(){
    this.modeEdit = false;
    this.filterTasks1.find(task => task.id === this.idForChange)!.state = '';
    this.filterTasks1.find(task => task.id === this.idForChange)!.checked = false;
  }

  //Enfocar el input para la edición
  inputFocus(id:any){
    if(!this.modeEdit) return;
    const myInput = document.getElementById(id);
    myInput!.focus();
  }

}

