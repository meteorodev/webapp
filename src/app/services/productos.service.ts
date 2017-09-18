import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductosService {

  public url:string;
  //constructor() { 
  constructor(
    public _http: Http
  ) { 
    this.url  = GLOBAL.url;
    console.log("mi url "+this.url);
   }
  getProducts(){
    //return "Servicio products";
    return this._http.get(this.url+"product/all").map(res => res.json());
  }
  getProduct(id){
    return this._http.get(this.url+"product/get/"+id).map(res => res.json());
  }

  addProduct(producto:Producto){
    let json = JSON.stringify(producto);
    let params = 'json'+json;// this no use in spring boot
    //let headers = new Headers({'Content-Type':'application/x-www-form-urlcoded'});
    let headers1 = new Headers({'Content-Type':'application/json'});
    /*return this._http.post(this.url+"product/prod",params,{headers: headers})
            .map(res => res.json );*/
    return this._http.post(this.url+"product/prod",JSON.stringify(producto),{headers: headers1})
            .map(res => res.json );
  }
}
