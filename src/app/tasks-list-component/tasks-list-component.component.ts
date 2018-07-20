import { Component, OnInit } from '@angular/core';
import { TasksListService } from './tasks-list.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tasks-list-component',
  templateUrl: './tasks-list-component.component.html',
  styleUrls: ['./tasks-list-component.component.css']
})
export class TasksListComponentComponent implements OnInit {

  tasks: any = [];
  delete: any = [];
  constructor(private tasksService: TasksListService, private http: Http) { }

  ngOnInit() {
     this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  deleteTask(id) {
    const url = 'http://yii.loc/task/delete/' + id;
    this.tasksService.deleteTaskById(url);
  }
}
