import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto'
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers: [ProductosService]
})
export class ProductosListComponent implements OnInit {
  public titulo:string;
  public productos:Producto[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductosService
  ) { 
    this.titulo="listado de productos";
    
  }

  ngOnInit() {
    console.log("Lista de productos cargados");
    this._productoService.getProducts().subscribe(
      result => {        
        if(result.code != 200){
          console.log(result)
        }else{
          this.productos = result.data;
        }
      },
      error => {
        console.log(<any> error);
      }
    );
  }

}
