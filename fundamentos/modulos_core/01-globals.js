
// this === global es true

//global es un equivalente de this en el navegador, en Node this es un alias de global

// if(this === false){
//     console.log('marco');
// }else{
//     console.log('polo');
// }

// el objeto global contiene todos los metodos y propiedades básicas de node

let i =0;
let intervalo = setInterval(() => { 
    console.log("Ping"); 
    if (i === 3){ 
        clearInterval(intervalo); 
    }
    i ++;
}, 1000);

setImmediate(()=>{
    console.log("Iniciando Proceso...")
})

//Muestra el directorio donde estamos trabajando
// console.log(__dirname);

//Muestra el directorio y el archivo que temenos abierto
// console.log(__filename);

//Es buena practica no usar variables globales
// global.miVariable = 'mi variable global';
// console.log(miVariable);

//console.log(process);
