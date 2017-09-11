import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Producto } from '../../models/producto'
import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-pro-det',
  templateUrl: './pro-det.component.html',
  styleUrls: ['./pro-det.component.css'],
  providers: [ProductosService]
})
export class ProDetComponent implements OnInit {

  public product:Producto;
  constructor(
    private _productoService: ProductosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log("componente detalle cargado correctamente");
  }

}
