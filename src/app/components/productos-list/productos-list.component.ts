import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto'
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers:[ProductosService]
})
export class ProductosListComponent implements OnInit {
  public titulo:string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _productoService: ProductosService
  ) { 
    this.titulo="listado de productos";
    
  }

  ngOnInit() {
    console.log("Lista de productos cargados");
    alert(this._productoService.getProducts());
    /*this._productoService.getProducts().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any> error);
      }
    );*/
  }

}
