import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Producto } from '../models/producto'
import { GLOBAL } from './global'

@Injectable()
export class ProductosService {

  public url:string;
  //constructor() { 
  constructor(public _http:Http) { 
    this.url  = GLOBAL.url+"product/all";
    console.log("mi url "+this.url);
   }
  getProducts(){
    return "Servicio products";
    //return this._http.get(this.url).map(res => res.json() );
  }
}
