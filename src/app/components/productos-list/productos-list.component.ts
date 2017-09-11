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
    this.titulo="Listado de productos";
   // this.productos[0]=new Producto(4,"camarones apanados","camarones fritos con arina",5.5,"imagen.png");
  }

  ngOnInit() {
    console.log("Lista de productos cargados");
    //alert(this._productoService.getProducts());
    this._productoService.getProducts().subscribe(
      result => {        
        /*if(result.code != 200){
          console.log(result); 
          console.log(result.code);         
        }else{*/
          this.productos = result;
          console.log("else result");
        //}
      },
      error => {
        console.log("error");
        console.log(<any> error);
      }
    );
    /*for(let i = 0;i < this.productos.length;i++){
      console.log(this.productos[i].nombre);
    }*/
  }
  
}
