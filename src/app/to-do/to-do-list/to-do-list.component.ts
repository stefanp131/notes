import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/_models/ToDoItem';
import { TodoService } from 'src/app/_services/to-do.service';


@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  list: Observable<Item[]>;
  constructor(private toDoService: TodoService) {}

  ngOnInit() {
    this.list = this.toDoService.getListAsObservable();
  }
}
