import { Component, OnInit } from '@angular/core';
import { slideLight, taskAnimations } from '../animations';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-edit-kanban-item',
  templateUrl: './edit-kanban-item.component.html',
  styleUrls: ['./edit-kanban-item.component.css'],
  animations: [
    taskAnimations,
    slideLight
  ]
})
export class EditKanbanItemComponent implements OnInit {

  itemEditValue:string;
  queryItemId:number;

  constructor(private route: ActivatedRoute, private listaService: ListasService) { }

  ngOnInit() {
    this.initComponent();
  }

  initComponent(){
    this.route.queryParams.subscribe(params =>{
      var id:number = params.itemId;
      this.queryItemId = id;

      this.itemEditValue =  this.returnItemById(id).text;
    
    });
  }

  returnItemById(id:number){
    let item:any;
    this.listaService.getListas()[this.listaService.idxListActive].itens.forEach(el =>{
      if(el._id == id){
        item = el;
      }
    })
    return item;
  }


  editItem(newValue:string){
    this.returnItemById(this.queryItemId).text = newValue;
  }

} 
