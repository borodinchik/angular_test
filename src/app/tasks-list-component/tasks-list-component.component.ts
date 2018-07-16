import { Component, OnInit } from '@angular/core';
import { TasksListService } from '../tasks-list.service';

@Component({
  selector: 'app-tasks-list-component',
  templateUrl: './tasks-list-component.component.html',
  styleUrls: ['./tasks-list-component.component.css']
})
export class TasksListComponentComponent implements OnInit {

  tasks: any = [];
  constructor(private tasksService: TasksListService) { }

  ngOnInit() {
     this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }
}
