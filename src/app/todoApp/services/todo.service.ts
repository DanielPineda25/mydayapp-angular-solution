import { Injectable } from '@angular/core';
import { StateTask } from '../interfaces/stateTask.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public tasks: StateTask[] = [
    {id: 1, task:'Aprender Angular',         state:'',  checked: false},
    {id: 2, task:'Realizar testing',         state:'',  checked: false},
    {id: 3, task:'Buenas prácticas',         state:'',  checked: false},
    {id: 4, task:'Prácticas experimentales', state: '', checked: false},
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
  }

  //Eliminar tarea

  public deleteTask( i: number ){
    this.tasks = this.tasks.filter( task => task != this.tasks[i] );
  }

  //Eliminar tareas completadas

  public deleteCompletedTasks(){
    this.tasks = this.tasks.filter( task => task.state != 'completed' );
  }

  //Editar tareas
  public editTask(){
    //doble clic a determinado input
    //enviar el input tocado
    //acceder al contenido del input
    //permitir cambiar el contenido
    //guardar el contenido nuevo

  }

}
