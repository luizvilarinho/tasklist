import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddListaComponent } from './modal-add-lista/modal-add-lista.component'; 
import { EditItemComponent} from './edit-item/edit-item.component';
import { EditListNameComponent } from './edit-list-name/edit-list-name.component';
import { ModesContainerComponent } from './modes-container/modes-container.component';
import { ListModeComponent } from './list-mode/list-mode.component';
import { KanbanComponent } from './kanban/kanban.component';
import { EditKanbanItemComponent } from './edit-kanban-item/edit-kanban-item.component';
import { KanbanAddItemComponent } from './kanban-add-item/kanban-add-item.component';

const routes: Routes = [
  {
    path:'',
    component:ListModeComponent
  },
  {
    path:'kanban',
    component:KanbanComponent
  },
  {
    path:'kanban/edit-item',
    component:EditKanbanItemComponent
  },
  {
    path:'kanban/add',
    component:KanbanAddItemComponent
  },
  {
    path:'addLista',
    component:ModalAddListaComponent
  },
  {
    path:'edit-item',
    component:EditItemComponent
  },
  {
    path:'edit-name',
    component:EditListNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
