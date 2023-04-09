import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ToDoItemComponent, ToDoListComponent, ToDoInputComponent],
  exports: [ToDoItemComponent, ToDoListComponent, ToDoInputComponent],
})
export class ToDoModule {}
