import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ListModeComponent } from './list-mode/list-mode.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { ListasService } from './listas.service';
import { ModalAddListaComponent } from './modal-add-lista/modal-add-lista.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditListNameComponent } from './edit-list-name/edit-list-name.component';
import { SubtaskPorcentagemComponent } from './subtask-porcentagem/subtask-porcentagem.component';
import { NotesComponent } from './notes/notes.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ModesContainerComponent } from './modes-container/modes-container.component';
import { EditKanbanItemComponent } from './edit-kanban-item/edit-kanban-item.component';
import { KanbanAddItemComponent } from './kanban-add-item/kanban-add-item.component';
import { DndDirective } from './directives/dnd.directive';
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ListModeComponent,
    ListInfoComponent,
    ModalAddListaComponent,
    EditItemComponent,
    EditListNameComponent,
    SubtaskPorcentagemComponent,
    NotesComponent,
    KanbanComponent,
    ModesContainerComponent,
    EditKanbanItemComponent,
    KanbanAddItemComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [
    ListasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
