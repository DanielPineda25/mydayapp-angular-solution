import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { TodoboxComponent } from './components/todobox/todobox.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AllPageComponent } from './pages/all-page/all-page.component';
import { PendingPageComponent } from './pages/pending-page/pending-page.component';
import { CompletedPageComponent } from './pages/completed-page/completed-page.component';


@NgModule({
  declarations: [
    FooterComponent,
    LayoutPageComponent,
    TodoboxComponent,
    TodolistComponent,
    AllPageComponent,
    PendingPageComponent,
    CompletedPageComponent,
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule
  ]
})
export class TodoAppModule { }
