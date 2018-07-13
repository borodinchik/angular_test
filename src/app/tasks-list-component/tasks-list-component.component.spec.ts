import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponentComponent } from './tasks-list-component.component';

describe('TasksListComponentComponent', () => {
  let component: TasksListComponentComponent;
  let fixture: ComponentFixture<TasksListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
