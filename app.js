let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = {};
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P','El numero secreto es menor');
        } else {
            asignarTextoElemento('P','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';  
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //si ya sorteamos todos los numeros
     if (listaNumerosSorteados.legth == numeroMaximo) {
        asignarTextoElemento('P','Ya se sortearon todos los numeros posibles');
     } else {}
    // si el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generaNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }  
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('P',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();  
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
