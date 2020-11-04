function soyAsincrona(cb) {
    setTimeout(function(){
        console.log('Estoy siendo asíncrona');
        cb();
    }, 1000);
}

console.log('Iniciando Proceso...');
soyAsincrona(function (){
    console.log('Terminando Proceso...');
});

// Aqui la funcion "soyAsincrona" es una función que recibe otra función como parámetro 
// a esta se le denomina función de orden superior (higher-order function).
// El callback que es "cb" en este caso sería la función que es pasada como parámetro, 
// mas no la función que lo recibe.


