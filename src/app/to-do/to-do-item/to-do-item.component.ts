import { Component, Input } from '@angular/core';
import { Item } from 'src/app/_models/ToDoItem';
import { TodoService } from 'src/app/_services/to-do.service';


@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input('item') item: Item;
  public checked = false;
  constructor(private toDoService: TodoService) {}

  ngOnInit() {}

  remove() {
    this.toDoService.deleteItem(this.item.id);
  }

  check() {
    this.checked = !this.checked;
  }
}
