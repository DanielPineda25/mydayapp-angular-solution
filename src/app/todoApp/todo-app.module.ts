import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';

import { AllPageComponent } from './pages/all-page/all-page.component';
import { CompletedPageComponent } from './pages/completed-page/completed-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { PendingPageComponent } from './pages/pending-page/pending-page.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoboxComponent } from './components/todobox/todobox.component';
import { TodolistComponent } from './components/todolist/todolist.component';


@NgModule({
  declarations: [
    AllPageComponent,
    CompletedPageComponent,
    FooterComponent,
    LayoutPageComponent,
    PendingPageComponent,
    TasksComponent,
    TodoboxComponent,
    TodolistComponent,
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule
  ]
})
export class TodoAppModule { }
