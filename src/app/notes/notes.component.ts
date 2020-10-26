import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';
import { isNgTemplate } from '@angular/compiler';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes:Array<Notes>;

  inputNoteValue:string = "";
  typeEditInput:string = "hidden";

  novaNota:string;
  constructor(private listaService:ListasService) { }

  ngOnInit() {
    this.componentInit();
  }

  componentInit(){
    this.notes = this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].notas;
  }

  addNote(newNote){
    let note = [{
      edit:false,
      txt:newNote.value
    }];

    this.notes = note.concat(this.notes);

    this.listaService.getListas()[this.listaService.idxListActive].itens.filter((item)=>{
      return item.checked == true;
    })[0].notas = this.notes;

    newNote.value = "";

    console.log("gravar nota");
    console.log(this.listaService.getListas());
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

}
