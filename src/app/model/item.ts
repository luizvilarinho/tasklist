import { Notes } from './notes';
import { Subitem } from './subitem';

export interface Item { 
    _id:number, 
    text:string,
    complete:boolean,
    checked:boolean,
    subItens:Array<Subitem>,
    notas:Array<Notes>,
    kanban:String
}