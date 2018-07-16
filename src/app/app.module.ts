import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';

import { TasksListService } from './tasks-list.service';


const appRoutes: Routes = [
  { path: '', component: TasksListComponentComponent },
  { path: 'task/:id', component: TaskComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponentComponent,
    HeaderComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,

  ],
  providers: [TasksListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
