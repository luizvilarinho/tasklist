import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListasService } from '../listas.service';
import { Subscription, Observable, Subject } from 'rxjs';
import { slideLight, taskAnimations } from '../animations';
import { Menu } from '../model/menu';
import { Item } from '../model/item';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  animations: [
    taskAnimations, 
    slideLight
  ]
})
export class KanbanComponent implements OnInit {

  nomeLista:string;

  lista:Menu;

  fazer:Array<Item>;
  fazendo:Array<Item>;
  feito:Array<Item>;

  private subscriptions = new Subscription();

  constructor(private listasService:ListasService) { }

  ngOnInit() {
    this.initSubscription();
    this.initComponent();
  }

  initSubscription(){
    this.subscriptions.add(this.listasService.idxList$.subscribe((novoIdx:number) => {
      this.nomeLista = this.listasService.getListas()[novoIdx].nome;
    }));

    this.subscriptions.add(this.listasService.listasSubject.subscribe(listas => {
      let idx = this.listasService.idxListActive;
      this.lista = listas[idx];

      this.kanbanUpdate();
    }));
  }

  initComponent(){
    let idx = this.listasService.idxListActive;
    this.lista = this.listasService.getListas()[idx];
    this.nomeLista = this.lista.nome;
    
    this.kanbanUpdate();
  }

  kanbanUpdate(){
    this.fazer =  this.lista.itens.filter(el =>{
      console.log("FAZER1", el.kanban)
        if(el.kanban === "fazer"){
          return el;
        }
    })

    this.fazendo =  this.lista.itens.filter(el =>{
      if(el.kanban === "fazendo"){
        return el;
      }
    })
    
    this.feito =  this.lista.itens.filter(el =>{
      if(el.kanban === "feito"){
        return el;
      }
    })
  }

  changeToFazendo(id:number){
    let idx = this.listasService.idxListActive;

    this.listasService.getListas()[idx].itens.forEach(el =>{
      if( el._id === id){
        el.kanban = "fazendo";
        return el;
      }
    });

    this.listasService.emitListas();
    console.log("novometodo", this.listasService.getListas()[idx].itens);
    //this.kanbanUpdate();
  }

  changeToFazer(id:number){
    let idx = this.listasService.idxListActive;
    this.listasService.getListas()[idx].itens.forEach(el =>{
      if( el._id === id){
        el.kanban = "fazer";
        return el;
      }
    });

    this.listasService.emitListas();
  }

  changeToFeito(id:number){
    let idx = this.listasService.idxListActive;
    this.listasService.getListas()[idx].itens.forEach(el =>{
      if( el._id === id){
        el.kanban = "feito";
        return el;
      }
    });

    this.listasService.emitListas();
  }

  deleteItem(id){
    let idx = this.listasService.idxListActive;

    let itemIndex = this.listasService.getListas()[idx].itens.findIndex(el=>{
      return el._id === id;
    });

    this.listasService.getListas()[idx].itens.splice(itemIndex, 1); 
    this.listasService.emitListas();

    console.log(itemIndex)
    console.log(this.listasService.getListas()[idx].itens)

  }
  
  editItem(){
    
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
