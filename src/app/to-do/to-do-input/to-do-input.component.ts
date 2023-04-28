import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../_services/to-do.service';
import { Store } from '@ngrx/store';
import { addTodo } from '../to-do-state/to-do.actions';

@Component({
  selector: 'to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent {
  toDoForm: FormGroup;
  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      toDoItemInput: [''],
    });
  }

  submit() {
    this.store.dispatch(addTodo({ text: this.toDoForm.get('toDoItemInput').value}));
  }
}
