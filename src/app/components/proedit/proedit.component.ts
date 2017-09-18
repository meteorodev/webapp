import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-proedit',
  templateUrl: '../product-new/product-new.component.html',
  styleUrls: ['../product-new/product-new.component.css'],
  providers:[ProductosService]
})
export class ProeditComponent implements OnInit {
  public titulo;
  public producto:Producto;

  constructor(
    private _productoService:ProductosService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.titulo = "Editar producto";
    this.producto = new Producto(1,"","",0,"");
   }

  ngOnInit() {
  }

}
