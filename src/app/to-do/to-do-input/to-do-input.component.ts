import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../_services/to-do.service';

@Component({
  selector: 'to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent {
  toDoForm: FormGroup;
  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      toDoItemInput: [''],
    });
  }

  submit() {
    this.todoService.addItem(this.toDoForm.get('toDoItemInput').value);    
  }
}
