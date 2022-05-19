import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListasService } from '../listas.service';
import { isNgTemplate } from '@angular/compiler';
import { Notes } from '../model/notes';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @ViewChild('newNote') novo:HTMLInputElement;

  notes:Array<Notes>;

  inputNoteValue:string = "";
  typeEditInput:string = "hidden";

  novaNota:string;
  constructor(private listaService:ListasService) { }

  ngOnInit() {
    this.componentInit();
  }

  componentInit(){
    let _this = this;
    this.notes = this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].notas;

    document.addEventListener('keypress', function(e:any){
      if (e.keyCode == 13){
        let notaElement:HTMLInputElement = document.querySelector("[name='iptNota'")

        if(notaElement.value == ""){
          return false;
        }
        _this.addNote(notaElement);
        console.log("NOTA = ", notaElement)
      }
  })
  }

  addNote(newNote){
    let nvalue = newNote.value;
    console.log("NVALUE", nvalue)
    let note = [{
      edit:false,
      txt:nvalue
    }];

    this.notes = note.concat(this.notes);

    this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].notas = this.notes;

    newNote.value = "";


    this.listaService.gravarDados(this.listaService.getListas());
  }

  editNote(index){
    this.notes[index].edit = true;
    this.typeEditInput = "text";
  }

  confirmNote(iptEdit, index){
     this.notes[index].txt = iptEdit.value;
      this.notes[index].edit = false;

      iptEdit.value = "";

      this.typeEditInput = "hidden";

      /*Gravar*/
      this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
        return item.checked == true;
      })[0].notas = this.notes;

      this.listaService.gravarDados(this.listaService.getListas());
  }

  deleteNote(index){
    this.notes.splice(index, 1);

     /*Gravar*/
     this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].notas = this.notes;

    this.listaService.gravarDados(this.listaService.getListas());
  }

  onDrop(event: CdkDragDrop<any>){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }

}
