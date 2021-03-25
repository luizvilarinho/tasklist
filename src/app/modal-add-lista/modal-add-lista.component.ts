import { Component, OnInit , ViewChild} from '@angular/core';

import { ListasService } from '../listas.service';
import { taskAnimations, slideLight } from '../animations';

@Component({
  selector: 'app-modal-add-lista',
  templateUrl: './modal-add-lista.component.html',
  styleUrls: ['./modal-add-lista.component.css'],
  animations: [
    taskAnimations,
    slideLight
  ]
})
export class ModalAddListaComponent implements OnInit {

  @ViewChild('inputLNewList') input; 

  newList:any;

  constructor(private listaService:ListasService) { }

  ngOnInit() {
    this.input.nativeElement.focus()
  }

    addNewList(InputValue:string){

      if(InputValue == ''){
        return false;
      }
      
      this.newList={
        nome:InputValue,
        incompletedItens:function(){
          let qntItens:number = 0;
          for(let i=0; i < this.itens.length; i++){
            if(this.itens[i].complete == false){
              qntItens++;
            }
          };

          return qntItens;
        },
        itens:[],
        }

      this.listaService.getListas().push(this.newList);

      let lastIndexList = this.listaService.getListas().length -1;
      this.listaService.updateIndex(lastIndexList); 
      
      this.listaService.verifyIfIsEmptyList();
      this.listaService.emitEmptyList();

      let stringListas = JSON.stringify(this.listaService.getListas());
      localStorage.setItem("tasks", stringListas);
    }

    
}
