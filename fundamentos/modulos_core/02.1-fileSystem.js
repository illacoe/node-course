// File System con promesas 

const fs = require('fs').promises;

const fileName = '/archivo1.txt';
const rutaFile = __dirname + fileName;
let contenido = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante est. Vestibulum consequat tempus convallis. Ut quis erat a mauris vestibulum mollis. Proin a porttitor urna. Morbi sit amet velit nisl. Quisque euismod, elit eu convallis imperdiet, justo tellus condimentum elit, nec fringilla odio dolor et eros. Vestibulum non malesuada leo, rhoncus gravida dolor.';

function leer(ruta) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    });
    console.log('Puedes leer el archivo');
}
function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido);
    console.log('El archivo se ha escrito correctamente');
}
function borrar(ruta) {
    setTimeout(() => {
        fs.unlink(ruta);
        console.log('El archivo se ha borrado correctamente');
        console.log('Proceso Terminado...');
    }, 15000);
}

async function main(){
    try{
        await escribir(rutaFile, contenido, console.log);
        await leer(rutaFile, console.log);
        await borrar(rutaFile, console.log);
    }catch{
        console.error('Ha habido un Error', err);
    }
}

console.log('Iniciando Proceso...');
main();
