import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private listasService:ListasService) { }

  ngOnInit() {
  }

  
}
