// Ejemplo de Promise All

const myFunctionOne = () => {
    return new Promise( (resolve, reject) => {
        if (true) { 
            resolve('Promise 1');
        } else {
            reject('Whoops!');
        }
    });
}

 
const myFunctionTwo = () => {
    return new Promise( (resolve, reject) => {
        if (true) { 
            resolve('Promise 2');
        } else {
            reject('Whoops!');
        }
    });
}

Promise.all([myFunctionOne(), myFunctionTwo()])
    .then(response => {
        console.log('Array de resultados', response);
    })
    .catch(err => {
        console.error(err);
    })