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
  public isEdit;

  constructor(
    private _productoService:ProductosService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.titulo = "Editar producto";
    this.producto = new Producto(1,"vacio","vacio",0,"vacio");
    this.isEdit = true;
   }

  ngOnInit() {
    this.getProd();
    console.log(this.producto);
  }
  getProd(){
    this._route.params.forEach((params:Params)=>{
      let id = params['id'];
      this._productoService.getProduct(id).subscribe(
        response => {
          console.log(response)
          this.producto = response;
        },
        error => {
          console.log(<any> error)
        }
      );
    });
  }

}
