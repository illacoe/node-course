function hola(nombre, cb) {
    setTimeout(function(){
        console.log('Hola ' + nombre);
        cb();
    }, 5000);
}

function chao(nombre, cb){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        cb();
    }, 1000);
}

function conversacion(nombre, cb){
    setTimeout(function(){
        console.log('Como va todo ' + nombre + ', tanto tiempo');
        console.log('Me alegro mucho, nos vemos');
        cb();
    }, 3000);
}

console.log('Iniciando Proceso...');
hola('Javier',function (){
    conversacion('Javier', function(){
        chao('Javier', function(){
            console.log('Terminando Proceso...');
        })
    })
});

// Aqui la funcion "hola" recibe como  parámetros un nombre y una funcion que esta definida con el nombre "cb"
// "cb" sera llamado dentro de la funcion como cb(), ocurrira dentro del setTimeout para tener un orden cronologico de lo que queremos ejecutar
// OBS: A medida que vamos incrementando la existencia de funciones y llamados de callbacks, se va generando lo que se llama CALLBACK HELL
// OBS 2: Podemos compartir datos en los "cb"  por ejemplo dentro de setTimeout en el cb(nombre) podremos pasar la variable nombre, para no colocarlo muchas veces
// Conclusión: Esta herramienta es muy útil cuando no sabemos lo que tarda una respuesta, operacion de lectura de base de datos, ficheros o escritura.
