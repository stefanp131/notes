import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { toDoReducer } from './to-do-state/to-do.reducers';
import { ToDoEffects } from './to-do-state/to-do.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', toDoReducer),
    EffectsModule.forFeature([ToDoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  declarations: [ToDoItemComponent, ToDoListComponent, ToDoInputComponent],
  exports: [ToDoItemComponent, ToDoListComponent, ToDoInputComponent],
})
export class ToDoModule {}
