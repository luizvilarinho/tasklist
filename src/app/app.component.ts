import { Component } from '@angular/core';
import { ListasService } from './listas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedList:string;

  constructor(private listas:ListasService) {

  }

  ngOnInit() {
      if(this.listas.isEmptyLists){
        return false;
      }else{
        this.selectedList=this.listas.getListas()[0].nome;
      }
  }

  selectList(nomeLista:string){
    this.selectedList=nomeLista;
  }

}
