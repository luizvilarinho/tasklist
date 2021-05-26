import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ListasService } from '../listas.service';
import { Item } from '../model/item';
import { Subscription, Observable, Subject } from 'rxjs';
import { taskAnimations, slideLight } from '../animations';
import { transition, useAnimation, style } from '@angular/animations';

@Component({
  selector: 'app-list-mode',
  templateUrl: './list-mode.component.html',
  styleUrls: ['./list-mode.component.css'],
  animations: [
    taskAnimations, 
    slideLight
    
  ]
})
export class ListModeComponent implements OnInit {
  
  @ViewChild('editButton') editButton: ElementRef;

  private subscriptions = new Subscription();

  nomeLista:string;

  activedList:any;

  activateButton:boolean;
  activateButtonEdit:boolean;

  isCentralHidden:boolean = false;

  isEmptyHidden:boolean = true;

  isEmpty:boolean;

  showNameLists:boolean = false;
  
  arrowIcon:string = 'keyboard_arrow_right';

  selectIncompleteTasks:boolean = true;

  incompleteBtns:boolean = true;

  isChecked:Array<boolean>;

  completeSelected:boolean;
  incompleteSelected:boolean;

    constructor(private listasService:ListasService) {

  }

  ngOnInit() {

      if(this.listasService.isEmptyLists){
        this.initSubscription();
      }else{
        this.initListModeComponent();
      }
    
      this.nomeLista = this.listasService.getListas()[this.listasService.idxListActive].nome;
      }

    initListModeComponent(){


    let _this =this;
      
    this.activedList = this.listasService.getListas()[this.listasService.idxListActive].itens;

    this.incompleteSelected = true;
    
    this.initSubscription();

    this.checkedIfIsEmptyList();
  
      document.addEventListener('keypress', function(e:any){
          if (e.keyCode == 13){
            let item :HTMLInputElement = document.querySelector("[name='inputItem']");
            if(item.value == ""){
              return false;
            }
            _this.addItem(item);
          }
      })
    }

  initSubscription(){
      this.subscriptions.add(this.listasService.idxList$.subscribe((novoIdx:number) => {
        this.activedList = this.listasService.getListas()[novoIdx].itens;
        this.nomeLista = this.listasService.getListas()[novoIdx].nome;
        this.verifyCheckedItens();
      }))

    this.subscriptions.add(this.listasService.isEmptyLists$.subscribe((getIsEmpty:boolean) => {
      this.checkedIfIsEmptyList();
    }));

    this.checkedIfIsEmptyList();
    this.verifyCheckedItens();

    
  }

   addItem(inputElement:HTMLInputElement){
       
    let item:string= inputElement.value;

    if(item == ""){
      return false;
    }

    let inputItem:Item={
      _id:Math.floor(Math.random() * 10000),
      text:item,
      complete:false,
      checked:false,
      subItens:[],
      notas:[],
      kanban:"fazer"
    }
      
    this.listasService.getListas()[this.listasService.idxListActive].itens.push(inputItem);

    inputElement.value="";

    this.listasService.gravarDados(this.listasService.getListas());

   }

   verifyCheckedItens(){
    
    let itensChecked = this.activedList.filter((el) => {
      if (el.checked == true){
          return el;
      }
    });

    if(itensChecked.length == 1){
      this.activateButton = true;
      this.activateButtonEdit = true;
      this.listasService.emitSubtaskActive(itensChecked[0].subItens);
      this.listasService.showSubtasks = true;
      //console.log("LshowSubtasks", this.listasService.showSubtasks);
      this.listasService.emitSubstasksShowHide();
    }

    if(itensChecked.length == 0){
      this.activateButton = false;
      this.activateButtonEdit = false;
      this.listasService.showSubtasks = false;
      this.listasService.emitSubstasksShowHide();
    }

    if(itensChecked.length > 1){
      this.activateButtonEdit = false;
      this.listasService.showSubtasks = false;
      this.listasService.emitSubstasksShowHide();
    }
  }

   itemClicked(id){
    
      let item = this.activedList.filter((el) => {
          if (el._id == id){
              return el;
          }
      })[0];

      let isChecked = item.checked;
      item.checked = !isChecked;


      this.verifyCheckedItens();

      this.listasService.gravarDados(this.listasService.getListas());
   }
   
   deleteItens(){

      let itens:any = this.activedList.filter((el) => {
        if(el.checked == true){
            return el;
        }
      });

      let itensUnchecked = this.activedList.filter( (el) => {
        if(el.checked == false){
            return el;
        }
      })

      for (let ids=0; ids<itens.length; ids++){
        let el= document.getElementById(itens[ids]._id);
        el.parentElement.style.backgroundColor = 'coral';
      }

      this.listasService.getListByName(this.nomeLista).itens = itensUnchecked;
      this.activedList = itensUnchecked;
      
      this.activateButton = false;
      this.activateButtonEdit = false;

      this.listasService.gravarDados(this.listasService.getListas());
  }

  checkedIfIsEmptyList(){
    let isEmpty:boolean = this.listasService.isEmptyLists;

    
    if(isEmpty){
      this.isCentralHidden = true;
      this.isEmptyHidden = false;
    }else{
      this.isCentralHidden = false;
      this.isEmptyHidden = true;
    }
  }

  moveToDone(){
    let itens:any =this.activedList.filter((el) => {
      return el.checked == true;
    });

    let currentList = this.listasService.getListByName(this.nomeLista); 

    for(let i = 0; i < itens.length; i++){
      let itemId = itens[i]._id;

      let el= document.getElementById(itens[i]._id);
      el.parentElement.style.backgroundColor = 'PaleGreen';

      for(let j = 0; j < currentList.itens.length; j++){
        if(itemId == currentList.itens[j]._id){
          currentList.itens[j].complete = true;
          currentList.itens[j].checked = false;
        }
      }
      this.activateButton = false;
    }
    
    this.listasService.showSubtasks = false;
    this.listasService.emitSubstasksShowHide();
    this.listasService.gravarDados(this.listasService.getListas());
  }

  moveToUndone(){
    let itens:any = this.activedList.filter((item) => {
        if(item.checked == true){
          return item;
        }
    });
    let currentList = this.listasService.getListByName(this.nomeLista); 

    for(let i = 0; i < itens.length; i++){
      let itemId = itens[i]._id;

      for(let j = 0; j < currentList.itens.length; j++){
        if(itemId == currentList.itens[j]._id){
          currentList.itens[j].complete = false;
          currentList.itens[j].checked = false;
        }
      }
      
    }

    this.activateButton = false;
    this.activateButtonEdit = false;
    this.showIncompletedTasks();
    this.listasService.gravarDados(this.listasService.getListas());
  }

  showListsNames():void{
    this.showNameLists = !this.showNameLists;

    if(this.showNameLists){
      this.arrowIcon = 'keyboard_arrow_down';
    }else{
      this.arrowIcon = 'keyboard_arrow_right';
    }
  }

  uncheckedAll(nomeLista){
    let itens = this.listasService.getListByName(nomeLista).itens;
    for(let i = 0; i < itens.length; i++){
      itens[i].checked = false;
    }
  }
  
  doChange(name:string):void{
    
    let itens:any = this.activedList.filter((el) => {
     if(el.checked == true && el.complete == false){
        return el;
     }
    });

    let changeTo = this.listasService.getListByName(name).itens; 

    for(let i = 0; i < itens.length; i++){
      let itemId:number = itens[i]._id;
        changeTo.push(itens[i]);
    }

    

    this.deleteItens();
    this.uncheckedAll(name);

    this.showListsNames();
    
    this.showNameLists = false;

    this.arrowIcon = 'keyboard_arrow_right';
    
    this.listasService.gravarDados(this.listasService.getListas());
   
  }

  showCompletedTasks(){
    this.selectIncompleteTasks = false;
    this.completeSelected = true;
    this.incompleteSelected = false;
    this.incompleteBtns = false;
  }

  showIncompletedTasks(){
    this.selectIncompleteTasks = true;
    this.completeSelected = false;
    this.incompleteSelected = true;
     this.incompleteBtns = true;
  }

  emitSelectedItem(){
    let itemId:number = this.activedList.filter((item) => {
        if(item.checked == true){
            return item._id;
        }
    })[0];

    this.listasService.selectedItemId = itemId;
    this.listasService.emitSelectedlistId();
}

  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

    
