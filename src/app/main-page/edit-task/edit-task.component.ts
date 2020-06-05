import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  dataTask: {description: string, start_date: any, start_time: any} = { description: '', start_date: '', start_time: '' };
  taskArray: any[] = [];
  id: string;

  constructor(private mainService: MainService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.taskArray = this.mainService.taskArray;
    this.id = this.route.snapshot.params.id;
    this.dataTask = this.taskArray[this.id];
  }

  editTask() {
    this.taskArray[this.id] = this.mainService.getObj(this.dataTask.description, this.dataTask.start_date, this.dataTask.start_time);
    this._snackBar.open('Задача успешно изменена', 'ok', {
      duration: 2000,
    });
  }
}
