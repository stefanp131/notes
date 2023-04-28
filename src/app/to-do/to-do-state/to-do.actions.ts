import { createAction, props } from '@ngrx/store';
import { ToDo } from 'src/app/_models/ToDoItem';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ text: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Page] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo Page] Load Todos Success',
  props<{ todos: ToDo[] }>()
);

export const loadTodosError = createAction(
  '[Todo Page] Load Todos',
  props<{ error: string }>()
);
