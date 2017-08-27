import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  providers: [ProductosService]
})
export class ProductNewComponent implements OnInit {
  public titulo:string;
  public producto:Producto;
  constructor(
    private _productoService:ProductosService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.titulo = "crea un nuevo producto";
    this.producto = new Producto(0,"","",0,"");
  }

  ngOnInit() {
    console.log("producto new cargado");
    
  }

  onSubmit(){
    console.log(this.producto);
    this._productoService.addProduct(this.producto).subscribe(
      response =>{
        //if (response. == 200) {
          this._router.navigate(['/productos']);
        //} else {
          console.log(response);
        //}
      },
      error => {
        console.log("Soy el error");
        console.log(<any> error);
      }
    );
  }

}
