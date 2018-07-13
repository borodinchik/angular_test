import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks-list-component',
  templateUrl: './tasks-list-component.component.html',
  styleUrls: ['./tasks-list-component.component.css']
})
export class TasksListComponentComponent implements OnInit {

tasks: Array<any> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://yii.loc/').subscribe(data => {
     this.tasks = data
    });
  }
}
