const usuarios = [{
    nombre: 'Lorena',
    mail: 'lorena1980@hotmail.com',
    pass: 'coticoti'
},
{
    nombre: 'Fatima',
    mail: 'fati15@gmail.com',
    pass: 'holahola'
},
{
    nombre: 'Bartolome',
    mail: 'bartolomeimba@gmail.com',
    pass: 'bocaboca'
}]

const productos = [{
    nombre: "Antifaz Gris",
    categoria: "disfraz",
    precio: 300,
    img: './imgs/antifazgris.jpg'
}, {
    nombre: "Banderin Feliz cumpleaños",
    categoria: "decoracion",
    precio: 700,
    img: './imgs/banderinfc.jpg'
}, {
    nombre: "Cañon de papelitos",
    categoria: "fiesta",
    precio: 900,
    img: './imgs/lanzapapelitos.jpg'
}, {
    nombre: "Velas",
    categoria: "decoracion",
    precio: 50,
    img: './imgs/velasbicolor.jpg'
}]

//Como con la profe pongo los elementos del DOM que necesito//

const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    elementosToggleables = document.querySelectorAll('.toggeable');



    // La funcion para validar el usuario//
function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    console.log(encontrado)
    console.log(typeof encontrado)

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass,
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


function mostrarInfoProductos(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardProducto" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreProducto">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoProducto">
                <div class="card-body">
                    <p class="card-text" id="categoriaProducto">Categoria: ${element.categoria}</p>
                    <p class="card-text" id="precioProducto">Precio: ${element.precio} pesos</p>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}


function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoProducto(productos);
        presentarInfo(elementosToggleables, 'd-none');
    }
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    //En este paso verificamos que los campos a rellenar sean completados//
    if (!inputMailLogin.value || !inputPassLogin.value) {
        alert('Todos los campos tienen que estar completos');
    } else {
        let data = validarUsuario(usuarios, inputMailLogin.value, inputPassLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {
            //este paso es por si quiere que se recuerde su informacion//
            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            
            modal.hide();
            
            mostrarInfoProductos(productos);
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));