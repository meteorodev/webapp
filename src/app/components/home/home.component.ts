import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo:string;
  constructor() {
    this.titulo = 'Pagina principal';
   }

  ngOnInit() {
    console.log('Se a cargado el component')
  }

}