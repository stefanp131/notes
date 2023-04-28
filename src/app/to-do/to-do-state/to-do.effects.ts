import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState, ToDoState } from './to-do.selectors';
import { Store } from '@ngrx/store';
import { TodoService } from 'src/app/_services/to-do.service';
import {
  addTodo,
  loadTodos,
  loadTodosError,
  loadTodosSuccess,
  removeTodo,
} from './to-do.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ToDoEffects {
  constructor(
    private actions$: Actions,
    private Store: Store<AppState>,
    private toDoService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.toDoService.getList().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosError({ error })))
        )
      )
    )
  );

  saveTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo),
        switchMap((action) => of(this.toDoService.addItem(action.text)))
      ),
    { dispatch: false }
  );

  removeTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeTodo),
        switchMap((action) => of(this.toDoService.deleteItem(action.id)))
      ),
    { dispatch: false }
  );
}
