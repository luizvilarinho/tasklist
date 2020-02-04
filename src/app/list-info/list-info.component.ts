import { Component, OnInit } from '@angular/core';

import { Subscription, observable, } from 'rxjs';
import { ListasService } from '../listas.service';
import { taskAnimations, slideLight } from '../animations';
import { Subitem } from '../model/subitem';
import { Item } from '../model/item';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css'],
  animations: [
    taskAnimations, 
    slideLight
  ]
})
export class ListInfoComponent implements OnInit {

  
  private subscriptions = new Subscription();

  subItens:Array<Subitem>; 

  listInfoShow:boolean;

  activateButton:boolean;
  activateButtonEdit:boolean;
  subItemCompleted:boolean;
  indexList:number;

  showDoneBtn:boolean;

  constructor(private listasService:ListasService) { }

  ngOnInit() {
    this.componentInit();
    this.initSubscription();
    
  }

  componentInit(){

    this.initSubscription();
    this.activateButton = false;
    this.showDoneBtn = true;
    
  }

  initSubscription(){
    this.subscriptions.add(this.listasService.showSubtasks$.subscribe((subtasksShowHide:boolean) => {
      this.listInfoShow = this.listasService.showSubtasks;
    }));

    this.subscriptions.add(this.listasService.idxList$.subscribe((idx:number) => {
      this.indexList = idx;
    }));

    this.subscriptions.add(this.listasService.subtaskActive$.subscribe((subitensListaService)=>{
      this.subItens = subitensListaService;
    }))
  }

  subItemClicked(subItemId){

    let subitem = this.subItens.filter((sub) => {
        if(sub._id == subItemId){
            return sub;
        }
    })[0];


    if(subitem.complete){
      this.showDoneBtn = false;
    }else{
      this.showDoneBtn = true;
    }

    let subitemChecked = subitem.checked
    subitem.checked= !subitemChecked;

    this.checkedActivateButtons();

  }

  addSubItem(inputSuitem){
      let subitem:Subitem = {
        _id:Math.floor(Math.random() * 10000),
        text:inputSuitem.value,
        complete:false,
        checked:false
      };

      console.log("listas", this.listasService.getListas());

      this.subItens.push(subitem);
      inputSuitem.value = "";

      let itensCompletes = this.subItens.filter((sub)=>{
        return sub.complete == true;
      });

      let itensUncomplete = this.subItens.filter((sub)=>{
        return sub.complete == false;
      });

      this.subItens = itensUncomplete.concat(itensCompletes);
        

      this.listasService.calcularPorcentagemConcluida();
  }

  checkedActivateButtons(){
    if(this.subItens == undefined){
      return false;
    }

    let checkedSubitens = this.subItens.filter( (sub) => {
      return sub.checked == true;
    });

    if(checkedSubitens.length == 1){
      this.activateButton = true;
      this.activateButtonEdit = true;
    };

    if (checkedSubitens.length == 0){
      this.activateButton = false;
      this.activateButtonEdit = false;
      this.showDoneBtn = true;
    }

    if (checkedSubitens.length > 1){
      this.activateButton = true;
      this.activateButtonEdit = false;
    }
  }

  markToDone(){
    let subItensChecked = this.subItens.filter((sub)=>{
      return sub.checked == true;
    });

    
    subItensChecked.forEach((sub, index)=>{
      
      sub.complete = true;
      sub.checked = false;
      let idx= this.subItens.indexOf(sub);

      //remove e adiciona o elemento para a última posição do array
      this.subItens.push(this.subItens.splice(idx, 1)[0]);
    })

    
    if(subItensChecked.length > 0){
      this.showDoneBtn = true;
    }

    this.listasService.calcularPorcentagemConcluida();
    
  }

  markToUndone(){
    let subItensChecked = this.subItens.filter((sub)=>{
      return sub.checked == true;
    });

    subItensChecked.forEach((sub, index)=>{
      sub.complete = false;
      sub.checked = false;
      this.showDoneBtn = true;
    })

    let itensCompletes = this.subItens.filter((sub)=>{
      return sub.complete == true;
    });

    let itensUncomplete = this.subItens.filter((sub)=>{
      return sub.complete == false;
    });

    this.subItens = itensUncomplete.concat(itensCompletes);

    console.log(this.listasService.getListas());
    this.listasService.calcularPorcentagemConcluida();
  }

  deleteSubItens(){
    let subItensCheckeds = this.subItens.filter((sub)=>{
        return sub.checked == true;
    });

    subItensCheckeds.forEach((subitem)=>{
      var idxSub = this.subItens.indexOf(subitem);
      this.subItens.splice(idxSub, 1);
    })
  }

  changeEditParam(){
    this.listasService.edit = "subitem";
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
