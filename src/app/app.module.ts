import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';

const appRoutes: Routes = [
  { path: '', component: TasksListComponentComponent },
  // { path: 'task/id', component: TasksListComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponentComponent,
    HeaderComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
