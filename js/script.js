class Producto {

    constructor(nombre, categoria, precio, id) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseInt(precio);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

}

const productos = [
    new Producto('Antifaz Blanco', 'Fiesta', 600, 1),
    new Producto('Coco Rallado', 'Alimento', 120, 2),
    new Producto('Mantel', 'Decoracion', 1200, 3),
    new Producto('Mascara Jason', 'Fiesta', 300, 4),
    new Producto('Sangre Falsa', 'Fiesta', 400, 5),
    new Producto('Globo Comun', 'Fiesta', 30, 6),
]

let continuar = true;

while (continuar) {

    let ingreso = prompt('Ingresa los datos del producto: nombre, categoria, precio, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    const datos = ingreso.split('/');
    console.log(datos);

    const producto = new Producto(datos[0], datos[1], datos[2]);

    productos.push(producto);
    producto.asignarId(productos);
    console.log(productos);

}
let criterio = prompt('Elegí el criterio deseado:\n1 - Nombre (A a Z) \n2 - Nombre (Z a A)\n3 - Mayor a Menor Precio');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
            return nombreAscendente;
        case '2':
            return arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));

        case '3':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        default:
            alert('No es un criterio válido, te mostraremos el catálogo sin ordenar');
            return arrayOrdenado;
    }

}

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Nombre: ' + elemento.nombre + '\nCategoria: ' + elemento.categoria + '\nPrecio: ' + elemento.precio + '\n\n'
    });

    return info;

}

alert(crearStringResultado(ordenar(criterio, productos)));