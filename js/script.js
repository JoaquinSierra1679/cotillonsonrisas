
alert("Para poder comprar en esta pagina tenes que ser de la ciudad de Miramar");

let respuesta = 'si';

function login() {
    let ingresar = false;

    for (let i = 1; i >= 0; i--) {
        let resultado = prompt('¿Vivis en la ciudad de Miramar?. Tenes ' + (i + 1) + ' intentos.');
        if (resultado == respuesta) {
            alert ('Podes realizar una compra');
            ingresar = true;
            break;
        } else {
            alert('Al no ser de Miramar solo podras observar la pagina. Te quedan ' + i + ' intentos');
        }
    } 
    return ingresar;
}
if (login()) {
    let opcion = prompt('Elegí una opción: \n1- Comprar. \n2- Contacto. \n3- Ubicación. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('¡Acepta y elegi tu producto!');
                break;
            case '2':
                let Contacto = prompt('Aqui te dejamos nuestro Whatsapp: 2291504818');
                break;
            case '3':
                let Ubicación = prompt('Estamos en la calle 26 N1541');
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }

        opcion = prompt('Elegí una opción: \n1- Comprar. \n2 - Contacto. \n3 - Ubicación. \n Presioná X para finalizar.');

    }

} else {
    alert('No podra seguir navegando en esta página');
}


alert('Adiós');