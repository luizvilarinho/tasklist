import { Component, OnInit } from '@angular/core';

import { ListasService } from '../listas.service';
import { taskAnimations, slideLight } from '../animations';

@Component({
  selector: 'app-edit-list-name',
  templateUrl: './edit-list-name.component.html',
  styleUrls: ['./edit-list-name.component.css'],
  animations: [
    taskAnimations,
    slideLight
  ]
})
export class EditListNameComponent implements OnInit {

  listName:string;
  constructor(private listasService:ListasService) { }

  ngOnInit() {

    this.initComponent();
  }

  initComponent():void{
    this.listName = this.listasService.getListas()[this.listasService.idxListActive].nome;
  }

  editItemName(newName:string):void{
    this.listasService.getListas()[this.listasService.idxListActive].nome = newName;
    this.listasService.emitIndexList();
    
    this.listasService.gravarDados(this.listasService.getListas());
  }

}
