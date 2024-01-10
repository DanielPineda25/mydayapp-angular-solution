import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { AllPageComponent } from './pages/all-page/all-page.component';
import { PendingPageComponent } from './pages/pending-page/pending-page.component';
import { CompletedPageComponent } from './pages/completed-page/completed-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'all', component: AllPageComponent },
      { path: 'pending', component: PendingPageComponent },
      { path: 'completed', component: CompletedPageComponent },
      { path: '**', redirectTo: 'all' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
