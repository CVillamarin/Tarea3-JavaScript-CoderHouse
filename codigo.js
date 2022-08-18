/*
class Impresiones{
    constructor(id,nombre,precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}
class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

let impresiones1 = new Impresiones("776493","LLaveros customisables",450)
let impresiones2 = new Impresiones("449583", "Pastilleros",500)
let impresiones3 = new Impresiones("155368", "Lapiceros",675)

const producto = []

producto.push(impresiones1)
producto.push(impresiones2)
producto.push(impresiones3)

function comprar(){
alert("De momento tenemos los siguientes articulos: ");
producto.forEach(productos=>alert(productos.nombre));
let carrito=prompt("Que articulo queres?");
const encontrado=producto.find(productos=>productos.nombre == carrito);
alert("Genial,nos encargaremos de hacer tu orden de "+(encontrado.nombre)+" de inmediato,el precio sera de "+(encontrado.precio)+"$");

}
comprar()
*/
class Impresiones {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


const productos = [];
const elementosCarrito = [];
const contenedorProductos = 
    document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items")


cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

function cargarProductos() {
    productos.push(new Impresiones("449583", 'Pastilleros',500, './imagenes/pastillero.jfif'));
    productos.push(new Impresiones("155368","Lapiceros",675,"./imagenes/lapiceros.jpg"));
    productos.push(new Impresiones("776493","LLaveros customisables",450,"./imagenes/llaveros.jpeg"));
    productos.push(new Impresiones("564436","Animales Articulados",600,"./imagenes/animales.webp"));
    productos.push(new Impresiones("629117","Macetas",740,"./imagenes/macetas.jfif"));
}

function cargarCarrito() {
    let elementoCarrito = new ElementoCarrito(
        new Impresiones("155368","Lapiceros",675,"./imagenes/lapiceros.jpg"),
        1
    );

    elementosCarrito.push(elementoCarrito);
}

function dibujarCarrito() {
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;

}

function crearCard(producto) {
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} ARS</p>
    `;
    cuerpoCarta.append(botonAgregar);

    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);

    botonAgregar.onclick = () => {

        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementosCarrito.push(elementoCarrito);

        dibujarCarrito();

    } 
    
    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}
