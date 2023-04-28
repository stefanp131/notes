import { Component } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/_models/ToDoItem';
import { TodoService } from 'src/app/_services/to-do.service';
import { loadTodos } from '../to-do-state/to-do.actions';
import { selectAllTodos, selectTodos } from '../to-do-state/to-do.selectors';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  list: Observable<ToDo[]> = this.store.select(selectAllTodos);
  constructor(private toDoService: TodoService, private store: Store) {}

  ngOnInit() {
    this.toDoService.list.subscribe(() => this.store.dispatch(loadTodos()));
  }
}
