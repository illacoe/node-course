//Ejemplo de callback

//Funcion de primer orden
function calcular(a,b,cb){
    return cb(a,b);
}

//Funcion
function sum(a,b){
    return a+b;
}

console.log(calcular(1,3,sum));