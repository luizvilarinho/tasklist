import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ListasService } from '../listas.service';
import { Subscription, Observable } from 'rxjs';
import { Item } from '../model/item';
import { taskAnimations, slideLight } from '../animations';
import { Subitem } from '../model/subitem';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  animations: [
    taskAnimations,
    slideLight
  ]
})
export class EditItemComponent implements OnInit {

  itemEditValue: string;
  _selectedItem:Item;
  _selectedSubitem:Subitem;

  subscribeItemId = new Subscription();

  edit = this.listasService.edit;

  constructor(private listasService:ListasService) { 
    
  }

  ngOnInit() {
    if(this.edit == "subitem"){
      let itemActive = this.listasService.getListas()[this.listasService.idxListActive].itens.filter((item)=>{
          return item.checked == true;
      })[0];

      let subitemChecked = itemActive.subItens.filter((sub)=>{
          return sub.checked == true;
      })[0];
      
      this._selectedSubitem = subitemChecked;
      this.itemEditValue = subitemChecked.text;

    }else{
      this.initListener();
    }
    

  }

  private initListener(): void {
      this.subscribeItemId.add(this.listasService.selectedItemId$.subscribe((itemId:number) => {

        let itens = this.listasService.getListas()[this.listasService.idxListActive].itens;
        //let lista = this.listasService.getListByName(activeName).itens;
        
        for( let i = 0; i < itens.length; i++ ){
          
            if(itens[i].checked == true){
              this._selectedItem = itens[i];
              this.itemEditValue = itens[i].text;
            }
        }
    }))
  }

  editItem(newValue:string){
    if(this.listasService.edit == "subitem"){
      this._selectedSubitem.text = newValue;
    //   let i = this.listasService.getListas()[this.listasService.idxListActive].itens.filter((item)=>{
    //     return item.checked == true;
    // })[0].subItens;
    // console.log("SUBITENS", i)
    //   this.listasService.emitSubtaskActive(i);
    //   this.listasService.emitIndexList();
    //   this.listasService.showSubtasks = false
    //   this.listasService.emitSubstasksShowHide()

    }else{
      this._selectedItem.text = newValue;
    }
    this.listasService.gravarDados(this.listasService.getListas())
  }

  ngOnDestroy(): void {
    this.subscribeItemId.unsubscribe();
    this.listasService.edit = "";
  }
  
}

