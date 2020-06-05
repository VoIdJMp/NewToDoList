import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AddTaskComponent} from './main-page/add-task/add-task.component';
import {EditTaskComponent} from './main-page/edit-task/edit-task.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'task/:id', component: EditTaskComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule {}
