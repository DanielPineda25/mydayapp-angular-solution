import { Injectable } from '@angular/core';
import { StateTask } from '../interfaces/stateTask.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public tasks: StateTask[] = [
    {id: 4, task:'Learn Angular',       state:'',  checked: false},
    {id: 3, task:'Frontend developer',  state:'',  checked: false},
    {id: 2, task:'New proyect',         state:'',  checked: false},
    {id: 1, task:'Coding practice',     state:'',  checked: false},
  ];

  // Crear tarea nueva
  public todoInput: string = '';

  public createTask( content:string ){

    this.todoInput = content.trim();

    const newTask: StateTask =
      {
        id: this.tasks.length + 1,
        task: this.todoInput,
        state:'',
        checked: false
      }

    this.tasks.unshift(newTask);
    this.saveLocalStorage();

  }

  //Eliminar tarea

  public deleteTask( i: number ){
    this.tasks = this.tasks.filter( task => task != this.tasks[i] );
    this.saveLocalStorage();
  }

  //Eliminar tareas completadas

  public deleteCompletedTasks(){
    this.tasks = this.tasks.filter( task => task.state != 'completed' );
    this.saveLocalStorage();
  }

  //Editar tareas: faltó, lo deje en componente (mala práctica)
  public editTask(){}

  //Persistencia de datos en LocalStorage, deberia ser private (organizar)
  public saveLocalStorage(): void{

      const dataToSave = this.tasks.map(task => ({
        id: task.id,
        task: task.task,
        state: task.state,
        checked: task.checked
      }));

    localStorage.setItem('mydayapp-angular', JSON.stringify( dataToSave ));
  }

  public loadLocalStorage(): void{
    if( !localStorage.getItem( `mydayapp-angular` )) return;
    this.tasks = JSON.parse(localStorage.getItem('mydayapp-angular')!);
  }


}
