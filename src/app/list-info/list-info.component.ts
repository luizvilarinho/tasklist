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

  anable = false;
  
  constructor(private listasService:ListasService) { }

  ngOnInit() {
    
    this.initSubscription();
    this.componentInit();
    
    console.log("SUBTASKS INIT")
    this.verifyCheckedItens();

  }

  componentInit(){
    let _this = this;
    this.initSubscription();
    this.activateButton = false;
    this.showDoneBtn = true;

    document.addEventListener('keypress', function(e:any){
      if (e.keyCode == 13){
        let item :HTMLInputElement = document.querySelector("[name='inputSubitem']");
        
        if(!item){
          return false;
        }

        if(item.value == ""){
          return false;
        }

        console.log("SUBITEM: ", item)
        _this.addSubItem(item);
      }
  })
    
  }

  initSubscription(){
    this.subscriptions.add(this.listasService.showSubtasksSubject.subscribe((subtasksShowHide:boolean) => {
      console.log("subtasksShowHide", subtasksShowHide);
      this.listInfoShow = subtasksShowHide;
    }));

    this.subscriptions.add(this.listasService.idxList$.subscribe((idx:number) => {
      this.indexList = idx;
    }));

    this.subscriptions.add(this.listasService.subtaskActive$.subscribe((subitensListaService)=>{
      this.subItens = subitensListaService;
    }))
  }

  verifyCheckedItens(){
    let showSubitens = false;
    for(let lista of this.listasService.getListas()){
      //console.log("lista", lista.itens)
        lista.itens.forEach(el => {
          if(el.checked === true){
            console.log("SHOWDUBITENS TRUE")
            let sub = this.listasService.getListas()[this.listasService.idxListActive].itens.filter((el) => {
              if (el.checked == true){
                  return el;
              }
            })[0].subItens
      
            this.listasService.emitSubtaskActive(sub);
            showSubitens = true;
            return 
          }
        });
    }
   
    this.listInfoShow = showSubitens;
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

  gravarSubitens(){
     /*Gravar*/
     this.listasService.getListas()[this.listasService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].subItens = this.subItens;

    this.listasService.gravarDados(this.listasService.getListas());
  }

  addSubItem(inputSuitem){
      

      if(inputSuitem.value == ''){
        return false;
      }

      let subitem:Subitem = {
        _id:Math.floor(Math.random() * 10000),
        text:inputSuitem.value,
        complete:false,
        checked:false
      };

      this.listasService.subtaskActive.push(subitem);

      this.subItens = this.listasService.subtaskActive;

        inputSuitem.value = "";

      let itensCompletes = this.subItens.filter((sub)=>{
        return sub.complete == true;
      });

      let itensUncomplete = this.subItens.filter((sub)=>{
        return sub.complete == false;
      });

      this.subItens = itensUncomplete.concat(itensCompletes);
        
      this.listasService.calcularPorcentagemConcluida();

      /*Gravar*/
      this.gravarSubitens();

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

    //desativa botoes 
    this.activateButton = false;
    this.activateButtonEdit = false;

    //calcula porcentagem
    this.listasService.calcularPorcentagemConcluida();
    
    /*Gravar*/
    this.gravarSubitens();
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

    this.listasService.calcularPorcentagemConcluida();

     /*Gravar*/
     this.gravarSubitens();
  }

  deleteSubItens(){
    let subItensCheckeds = this.subItens.filter((sub)=>{
        return sub.checked == true;
    });

    subItensCheckeds.forEach((subitem)=>{
      var idxSub = this.subItens.indexOf(subitem);
      this.subItens.splice(idxSub, 1);
    });

    this.listasService.subtaskActive = this.subItens;

    this.listasService.calcularPorcentagemConcluida();

     /*Gravar*/
     this.gravarSubitens();
  }

  changeEditParam(){
    this.listasService.edit = "subitem";
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
