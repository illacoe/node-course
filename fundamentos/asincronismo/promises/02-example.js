//Promise Race
//  ¿Cual de todas las promesas se ejecuta primero?

let promise1 =  new Promise( (resolve, reject) => {
        setTimeout(function(){
                resolve('Promise 1');
        }, 2000);
});

let promise2 =  new Promise( (resolve, reject) => {
    setTimeout(function(){
            resolve('Promise 2');
    }, 1000);
});
 
let promise3 =  new Promise( (resolve, reject) => {
    setTimeout(function(){
            reject('Promise 3');
    }, 5000);
});

Promise.race([ promise1, promise2, promise3])
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

// Pomise race mostrara cual es la primera en completarse, 
//en este caso se completara sienmpre la de menor tiempo, sin importar que en otra pueda haber un error