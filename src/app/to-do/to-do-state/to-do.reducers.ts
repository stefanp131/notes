import { createReducer, on } from '@ngrx/store';
import { ToDo } from 'src/app/_models/ToDoItem';
import {
  addTodo,
  loadTodos,
  loadTodosError,
  loadTodosSuccess,
  removeTodo,
} from './to-do.actions';

export interface ToDoState {
  todos: ToDo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ToDoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const toDoReducer = createReducer(
  initialState,
  on(addTodo, (state) => ({ ...state, status: 'loading' })),
  on(removeTodo, (state) => ({ ...state, status: 'loading' })),
  on(loadTodos, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    status: 'success',
  })),
  on(loadTodosError, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
