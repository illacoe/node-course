//Ejemplo de callback

function sum(a,b){
    return a+b;
}

function calcular(a,b,cb){
    return cb(a,b);
}

console.log(calcular(1,3,sum));