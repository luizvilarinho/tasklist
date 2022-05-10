import { Component, OnInit } from '@angular/core';
import { slideLight, taskAnimations } from '../animations';
import { ListasService } from '../listas.service';
import { Item } from '../model/item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kanban-add-item',
  templateUrl: './kanban-add-item.component.html',
  styleUrls: ['./kanban-add-item.component.css'],
  animations: [
    taskAnimations,
    slideLight
  ]
})
export class KanbanAddItemComponent implements OnInit {

  itemEditValue:string = "";
  label:string;

  constructor(private listasService:ListasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.label = params.label;    
    });

    let _this =this;
    document.addEventListener('keypress', function(e:any){
      if (e.keyCode == 13){
        let item :HTMLInputElement = document.querySelector("[name='editItemInput']");

        if(item.value == null || item.value == undefined){
          return false;
        }

        console.log(item.value);
        _this.addItem(item.value);
        _this.router.navigate(['/kanban']);
      }
  })

  }

  addItem(newValue:string){

    if(newValue == ""){
      return false;
    }

    let inputItem:Item={
      _id:Math.floor(Math.random() * 10000),
      text:newValue,
      complete:false,
      checked:false,
      subItens:[],
      notas:[],
      kanban:this.label
    }
      
    this.listasService.getListas()[this.listasService.idxListActive].itens.push(inputItem);


    //this.listasService.gravarDados(this.listasService.getListas());
  }
}
