import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, map } from 'rxjs';
import { ToDo } from '../_models/ToDoItem';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private firestore: Firestore = inject(Firestore);

  public listId = 0;
  list: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() {}

  addItem(value: string) {
    const toDoItemsCollection = collection(this.firestore, 'toDoItems');
    addDoc(toDoItemsCollection, <ToDo>{ text: value }).then(() =>
      this.listHasBeenUpdated()
    );
  }

  deleteItem(id: string) {
    deleteDoc(doc(this.firestore, 'toDoItems', id)).then(() =>
      this.listHasBeenUpdated()
    );
  }

  listHasBeenUpdated() {
    this.list.next(true);
  }

  getList(): Observable<ToDo[]> {
    const toDoItemsCollection = collection(this.firestore, 'toDoItems');
    const q = query(toDoItemsCollection);
    const result = from(getDocs(q)).pipe(
      map((collection) =>
        collection.docs.map((docm) => {
          return {
            id: docm.id,
            ...docm.data(),
          } as ToDo;
        })
      )
    );

    return result;
  }
}
