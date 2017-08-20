export class Producto {
    constructor(
        public id:number,
        public nombre:string,
        public descripcion:string,
        public precio:number,
        public imagen:string
    ){

    }

    toString(){
        return "id: "+this.id+" nombre: "+this.nombre+" descripcion: "+this.descripcion+
        " precio: "+ this.precio +" imagen: "+this.imagen ;
    }
}
