import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDo } from 'src/app/_models/ToDoItem';

export interface AppState {
  todos: ToDoState;
}

export interface ToDoState {
  todos: ToDo[];
}

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: ToDoState) => state.todos
);
