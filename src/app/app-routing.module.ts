import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddListaComponent } from './modal-add-lista/modal-add-lista.component'; 
import { EditItemComponent} from './edit-item/edit-item.component';
import { EditListNameComponent } from './edit-list-name/edit-list-name.component';

const routes: Routes = [
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
