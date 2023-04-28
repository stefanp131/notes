import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from 'src/app/_models/ToDoItem';
import { TodoService } from 'src/app/_services/to-do.service';
import { removeTodo } from '../to-do-state/to-do.actions';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent {
  @Input('item') item: ToDo;
  public checked = false;
  constructor(private toDoService: TodoService, private store: Store) {}

  ngOnInit() {}

  remove() {
    this.store.dispatch(removeTodo({ id: this.item.id }));
  }

  check() {
    this.checked = !this.checked;
  }
}
