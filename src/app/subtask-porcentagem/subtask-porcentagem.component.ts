import { Component, OnInit } from '@angular/core';

import { ListasService } from '../listas.service';
import { Subscription } from 'rxjs';

import { taskAnimations, slideLight } from '../animations';


@Component({
  selector: 'app-subtask-porcentagem',
  templateUrl: './subtask-porcentagem.component.html',
  styleUrls: ['./subtask-porcentagem.component.css'],
  animations: [
    taskAnimations, 
    slideLight
    
  ]
})
export class SubtaskPorcentagemComponent implements OnInit {

  private subscriptions = new Subscription();
  
  porcentagemConcluida:number;

  renderPorcentagem:string;

  constructor(private listasService:ListasService) { }

  ngOnInit() {
    this.initComponent();
  }

  initComponent(){
  
    this.subscriptions.add(this.listasService.porcentagemSubtask$.subscribe((porcentagem:number) => {
      this.porcentagemConcluida = porcentagem;
      this.renderPorcentagem = porcentagem + "%";
    }));

    this.listasService.calcularPorcentagemConcluida();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
