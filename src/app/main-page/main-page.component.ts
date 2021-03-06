import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit{
  taskArray: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.taskArray = this.mainService.taskArray;
  }

  delateTask(idx: number) {
    this.taskArray.splice(idx, 1);
  }
}
