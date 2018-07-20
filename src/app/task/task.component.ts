import {Component, Input, OnInit} from '@angular/core';
import { TaskIdService } from './task-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksListService } from '../tasks-list-component/tasks-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = {
    id: '',
    title: '',
    description: '',
    date_start: '',
    image: '',
  };
  constructor(
    private TaskListService: TasksListService,
    private TaskId: TaskIdService,
    private Route: ActivatedRoute,
    private router: Router,
    ) { }
  deleteTask(id) {
      const url = 'http://yii.loc/task/delete/' + id;
      this.TaskListService.deleteTaskById(url);
      }

  ngOnInit() {
    this.TaskId.getTaskById(this.Route.snapshot.params['id']).subscribe(data => {
      this.task.id = data.id;
      this.task.title = data.title;
      this.task.description = data.description;
      this.task.date_start = data.date_start;
      this.task.image = data.image;
    });
    console.log(this.task);
  }


}

