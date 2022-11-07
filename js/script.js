function existeUsuario (usuario) {
    

    let encontrado = false;

    for(const Jugador of listaJugadores) {

        if(Jugador.usuario === usuario) {
            encontrado = true; 
        }
    }
    
    return encontrado;
}


function usuarioTieneMonedas (nombredeUsuario, moneditas) {

    // 
    let usuarioEncontrado = buscarUsuario(nombredeUsuario);

    return (parseInt(usuarioEncontrado.monedas) >= parseInt(moneditas));
}

function buscarUsuario (usuario) {

    let usuarioEncontrado;

    for(let i = 0; i < listaJugadores.length; i++) {

        if(listaJugadores[i].usuario === usuario) {
            usuarioEncontrado = listaJugadores[i];
            break;
        }

    }

    return usuarioEncontrado;
}

class Jugador {

    constructor (usuario, monedas) {
        this.usuario = usuario;
        this.monedas = monedas;
    }

    descontarMonedas (monedas) {
        this.monedas = this.monedas - monedas;
    }

    sumarMonedas (monedas) {
        this.monedas = this.monedas + monedas;
    }
}
//Array//
const listaJugadores = [];

listaJugadores.push(new Jugador("Lorena", 12000));
listaJugadores.push(new Jugador("Joaquin", 3000));
listaJugadores.push(new Jugador("Nicole", 20000));

// Ingreso usuario de la persona DESDE la que quiero transferir
let usuarioDesde = prompt("Ingrese el usuario de la persona desde la cual quiere transferir");

while(!existeUsuario(usuarioDesde)) {
    usuarioDesde = prompt("Usuario no encontrado, ingreselo nuevamente");
}

// Ingeso usuario de la persona a la cual quiero transferirle

let usuarioHasta = prompt("Ingrese el usuario de la persona a la cual quiere transferir");

while(!existeUsuario(usuarioHasta)) {
    usuarioHasta = prompt("Usuario  no encontrado, ingreselo nuevamente");
}

// Monedas que quiero transferir

let monedasATransferir = parseInt(prompt("Ingrese la cantidad de monedas a transferir"));

while(monedasATransferir <= 0 || !usuarioTieneMonedas(usuarioDesde, monedasATransferir)) {
    monedasATransferir = parseInt(prompt("Monto inválido, vuelva a ingresarlo"));
}

// Descontar y acreditar monedas de los usuarios

const jugadorDesde = buscarUsuario(usuarioDesde);
const jugadorHasta = buscarUsuario(usuarioHasta);

jugadorDesde.descontarMonedas(monedasATransferir);
jugadorHasta.sumarMonedas(monedasATransferir);

console.log(jugadorDesde);
console.log(jugadorHasta);

console.log(listaJugadores);
