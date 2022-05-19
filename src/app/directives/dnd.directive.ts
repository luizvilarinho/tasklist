import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  constructor(private el: ElementRef) { }

  @HostListener('dragstart', ['$event']) onDragStart(ev:Event) {
    //ev.dataTransfer.setData("text", ev.target.id);
    console.log("START", ev)
  }

  @HostListener('document:ondrop', ['$event']) onDrop(event:DragEvent) {
    event.preventDefault();
    console.log("DROP", event)
  }
}
