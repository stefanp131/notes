import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../_models/ToDoItem';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public listId = 0;
  list: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  constructor() {}

  addItem(value: string) {
    const list = this.list.value;
    list.push({ id: this.listId, text: value });
    this.listId++;
    this.list.next(list);
  }

  deleteItem(id: number) {
    let list = this.list.value;
    list = list.filter((x) => x.id !== id);
    this.list.next(list);
  }

  setList(list: Item[]) {
    this.list.next(list);
  }

  getList(): Item[] {
    return this.list.value;
  }

  getListAsObservable(): Observable<Item[]> {
    return this.list.asObservable();
  }
}
