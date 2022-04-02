import { Injectable } from '@angular/core';

import { Subject, Observable, ReplaySubject } from 'rxjs';
import { Menu } from './model/menu';
import { Item } from './model/item';
import { Subitem } from './model/subitem';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  listas: Array<Menu>;
  listasSubject = new Subject<Array<Menu>>();

  private subjectList = new Subject<Array<Menu>>();

  private idxListSubject = new Subject<number>();

  private isEmptySubject = new Subject<boolean>();

  private selectedItemIdSubject = new ReplaySubject<number>();

  showSubtasksSubject = new Subject<boolean>();

  private porcentagemSubtaskSubject = new Subject<number>();

  private subtaskActiveSubject = new Subject<Array<Subitem>>();

  subtaskActive$ = this.subtaskActiveSubject.asObservable();
  
  porcentagemSubtask$ = this.porcentagemSubtaskSubject.asObservable();

  //showSubtasks$ = this.showSubtasksSubject.asObservable();

  selectedItemId$ = this.selectedItemIdSubject.asObservable();

  idxList$ = this.idxListSubject.asObservable();

  isEmptyLists$ = this.isEmptySubject.asObservable();
  
  list$ = this.subjectList.asObservable();

  idxListActive:number;

  isEmptyLists:boolean;

  selectedItemId:number;

  showSubtasks:boolean;

  porcentagemConcluida:number;

  edit:string;

  subtaskActive:Array<Subitem>;

  // kanbanShow = false;
  // kanbanShowSubject = new Subject<boolean>();



  constructor() {
    this.init();
   }

  private init():void{

    let listasSalvas:string = localStorage.getItem("tasks");

    if(listasSalvas == null){
      this.listas = new Array<Menu>();
      localStorage.setItem("tasks", JSON.stringify(this.listas));
    }else{
      this.listas = new Array<Menu>();

      let listasStorage = JSON.parse(listasSalvas);
      

      for(let i=0; i<listasStorage.length; i++){
        var menu1 = <Menu> {
          nome:listasStorage[i].nome,
          incompletedItens:function(){
            let qntItens:number = 0;
            for(let i=0; i < this.itens.length; i++){
              if(this.itens[i].complete == false){
                qntItens++;
              }
            };
    
            return qntItens;
          }, 
          itens:listasStorage[i].itens
          }
        
        this.listas.push(menu1);
          
      }
      
      this.isEmptyLists = false;
      this.idxListActive = 0;

      //this.calcularPorcentagemConcluida();
    }

    this.verifyIfIsEmptyList();

    
      
  }

  notificastion(){
   
    this.listasSubject.next(this.listas)
    this.gravarDados(this.listas);
    console.log("NOTIFICATION", this.listas)
  }

  notificationListener(){
    return this.listasSubject.asObservable();
  }

  getItem(itemId:number){
    let itemSelected = this.listas[this.idxListActive].itens.filter(item => {
      console.log(this.listas, this.idxListActive, itemId)
      if(item._id === itemId) {
        return item
      }
    })[0]

    return itemSelected
  }

  getListas(): Array<Menu>{
   

    return this.listas;
  }

  addToListas(item:Menu){
    this.listas.push(item);

    this.subjectList.next(this.listas);
    
    this.gravarDados(this.listas);
  }

  emitListas(){
    this.listasSubject.next(this.listas);
  }

  emitIndexList(){
    this.idxListSubject.next(this.idxListActive);
  }

  emitSubstasksShowHide(){
    console.log("SERVICE", this.showSubtasks)
    this.showSubtasksSubject.next(this.showSubtasks);
  }
  
  emitEmptyList(){
    this.isEmptySubject.next(this.isEmptyLists);
  }

  emitSelectedlistId(){
    let _id:number = this.selectedItemId;
    this.selectedItemIdSubject.next(_id);
  }
  emitSubtaskActive(subtasks:Array<Subitem>){
    this.subtaskActive = subtasks;
    this.subtaskActiveSubject.next(subtasks);
  }

  updateIndex(idx:number){
    this.idxListActive = idx; 

    this.emitIndexList();
  }

  getListByName(name:string){

    for(let i = 0; i < this.listas.length; i++){
      
      if(this.listas[i].nome == name){
        
          return this.listas[i];
      }
    }
  }

  verifyIfIsEmptyList(){
      let listsLength:number = this.listas.length;

      if(listsLength == 0){
          this.isEmptyLists = true;
      }else{
        this.isEmptyLists = false;
      }
  }

  calcularPorcentagemConcluida(){

        if(this.subtaskActive.length == 0){
          return false;
        }

        let subitensCompletedLength = this.subtaskActive.filter((sub)=>{
              return sub.complete == true
        }).length;

          if(subitensCompletedLength == 0){
            this.porcentagemConcluida = 0;
            this.porcentagemSubtaskSubject.next(this.porcentagemConcluida);
          }else{
            let total = this.subtaskActive.length;
            console.log("total", total);
            let porcentagem = (subitensCompletedLength * 100) / total;
            this.porcentagemConcluida = Math.trunc(porcentagem);
            this.porcentagemSubtaskSubject.next(this.porcentagemConcluida);
          }

          
 }

 uncheckedAll(){
   for(let i=0; i< this.listas.length; i++){
    this.listas[i].itens.forEach((item)=>{
      item.checked = false;
    })
   }
  }

  gravarDados(lista:Array<Menu>){
    let makeString = JSON.stringify(lista);
    localStorage.setItem("tasks", makeString);
  }

}
