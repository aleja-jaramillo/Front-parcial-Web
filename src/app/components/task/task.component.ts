import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTask()
    .subscribe(
      res=>{
        console.log(res)
        this.task = res;
      },
      err => console.log(err)
    )
  }

}
