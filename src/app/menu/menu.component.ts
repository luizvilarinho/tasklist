import { Component, OnInit , Output, Input, EventEmitter, OnDestroy} from '@angular/core';

import { ListasService } from '../listas.service';
import { Menu } from '../model/menu';
import { Subscription, Observable } from 'rxjs';
import { taskAnimations, slideLight } from '../animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [ 
    taskAnimations,
    slideLight
  ]
})
export class MenuComponent implements OnInit, OnDestroy {
  
  lateralHidden = false;
  h100 = false;

  nomesListas:Array<Menu>;

  @Input() selectedList:string;
  @Output('passingName') selectedNameList = new EventEmitter();

  private subscriptions = new Subscription();

  isActive:boolean;
  mobileOpenedMenu:boolean = false;

  constructor(private listasService:ListasService) { }

  ngOnInit() {

    if(this.listasService.isEmptyLists){
      this.initSubscription();
      
    }else{
      this.initMenuComponent();
    }
    
    
  }

  initMenuComponent(){
    
    
    this.initSubscription();

    setTimeout(() =>{
      document.querySelector("#listNames li:first-child a").classList.add("active");
    }, 50);
  }

  initSubscription(){
    this.nomesListas=this.listasService.getListas();
    
    this.subscriptions.add(this.listasService.list$.subscribe((listas:Array<Menu>) => {
      this.nomesListas = listas;
    }))

    this.subscriptions.add(this.listasService.idxList$.subscribe((novoIdx:number) => {
     setTimeout(() => { this.putClassActive(novoIdx);},100); }))
  }

  putClassActive(idx:number){

      let nodeList:NodeListOf<HTMLAnchorElement> = document.querySelectorAll("#listNames a");

      for (let i = 0; i < nodeList.length; i++){
        var nodeId:number = parseFloat(nodeList[i].getAttribute("id"));

        if(nodeId == idx){
          nodeList[i].classList.add('active');
        }else{
          nodeList[i].classList.remove('active');
        }
      }
  }


  selected(idx:number){

    this.listasService.uncheckedAll();

    //verify if is empty to show message
    this.listasService.verifyIfIsEmptyList();
    this.listasService.emitEmptyList();

    if(this.listasService.getListas()[idx] != undefined){
      this.listasService.idxListActive=idx;

      this.listasService.emitIndexList();
      
      this.putClassActive(idx);

      //this.listasService.showSubtasks = false;
      
      this.listasService.emitSubstasksShowHide();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  deleteList(idx:number):void{

      this.listasService.getListas().splice(idx, 1);
      this.selected(idx-1);
      
      this.listasService.gravarDados(this.listasService.getListas());
      this.listasService.showSubtasks = false;
      this.listasService.emitSubstasksShowHide()
  }

  showHideMenuLateral(){
    var columnElement:HTMLElement = document.querySelector(".grid-template-columns-3")

    this.lateralHidden = !this.lateralHidden;
    
    if(this.lateralHidden == true){
      
      columnElement.style.gridTemplateColumns = "70px 1fr"

      //document.querySelector('#conteudo').classList.add("grid-template-columns-2")
      this.h100 = true;
      
    }else{
      columnElement.style.gridTemplateColumns = "250px 1fr"
      //document.querySelector('#conteudo').classList.add("grid-template-columns-3")
      //document.querySelector('#conteudo').classList.remove("grid-template-columns-2")
      this.h100 = false;
    }
  }
  
  /*mobile*/
  openMobileMenu(){
   
    this.mobileOpenedMenu = !this.mobileOpenedMenu;
    console.log("mobileOpenedMenu", this.mobileOpenedMenu)
  }
  
}
