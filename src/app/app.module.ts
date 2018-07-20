import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';

import { TasksListService } from './tasks-list-component/tasks-list.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


const appRoutes: Routes = [
  { path: '', component: TasksListComponentComponent },
  { path: 'task/create', component: CreateTaskComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'task/update/:id', component: TaskUpdateComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponentComponent,
    HeaderComponent,
    TaskComponent,
    CreateTaskComponent,
    TaskUpdateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule

  ],
  providers: [TasksListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
