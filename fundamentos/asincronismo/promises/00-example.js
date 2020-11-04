// Promesas
// Las promesas tienen estados, resueltas, no resueltas, pendientes, en error

function hola(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
            reject('Hay un error: Promise hola');
        }, 5000);
        
    })
}

function chao(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ' + nombre);
            // resolve(nombre);
            reject('Hay un error: Promise chao');
        }, 1000);
    })
}

function conversacion(nombre){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            console.log('bla bla bla'); 
            resolve(nombre);
            reject('Hay un error: Promise conversacion');
        }, 3000);
    })
}


console.log('Iniciando Proceso..');
hola('Javier')
    .then(conversacion) 
    .then(conversacion) 
    .then(conversacion) 
    .then(chao) 
    .then((nombre) => {
        console.log('Terminando Proceso..')
    })
    .catch(error => { 
        console.log(error);
    })
