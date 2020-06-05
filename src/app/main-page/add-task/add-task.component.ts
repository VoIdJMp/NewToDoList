import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  dataTask: {description: string, start_date: any, start_time: any} = { description: '', start_date: '', start_time: '' };
  taskArray: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.taskArray = this.mainService.taskArray;
  }

  AddTask() {
    this.taskArray.push(this.mainService.getObj(this.dataTask.description, this.dataTask.start_date, this.dataTask.start_time));
    this.dataTask = this.mainService.getObj('', '', '');
  }
}
