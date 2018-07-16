import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  constructor(private http: Http) { }

  getAllTasks() {
    return this.http.get('http://yii.loc/')
      .pipe(map(function (responsive) {
        return responsive.json();
      })).pipe(map(tasks => {
        return tasks.map(task => {
          task.image = (task.image != null) ? task.image :  'def.png';
          return task;
        });
      }));
    }
    deleteTasks() {
      return this.http.get('http://yii.loc/task/');
    }
}
