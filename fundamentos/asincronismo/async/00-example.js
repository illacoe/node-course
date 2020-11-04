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
            resolve(nombre);
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


async function main(){
    let nombre = await hola('Javier');
    await conversacion();
    await conversacion();
    await conversacion();
    await chao(nombre);
    console.log('Terminando Proceso..')
}

console.log('Iniciando Proceso..')
main();