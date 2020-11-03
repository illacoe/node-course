
// Funcion de primer onden, el que recibe callback
function dateNow(cb){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        cb(date);
    },3000);
}

// Una funcion 
function printDate(date){
    console.log(date);
}

// Una funcion de primer orden recibiendo un callback
dateNow(printDate);