// File System 
// nos permite acceder a archivos de nuestro sistema

const fs = require('fs');

const fileName = '/archivo1.txt';
const rutaFile = __dirname + fileName;
let contenido = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante est. Vestibulum consequat tempus convallis. Ut quis erat a mauris vestibulum mollis. Proin a porttitor urna. Morbi sit amet velit nisl. Quisque euismod, elit eu convallis imperdiet, justo tellus condimentum elit, nec fringilla odio dolor et eros. Vestibulum non malesuada leo, rhoncus gravida dolor.';

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    });
}
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('no lo he podido escribir', err);
        } else {
            console.log('se ha escrito correctamente');
        }
    });
}
function borrar(ruta) {
        fs.unlink(ruta, function(err){
            if(err){
                console.error('No se ha podido borrar el archivo');
            }else{
                console.log('El archivo se ha borrado correctamente');
            }
        });
}

// escribir(rutaFile, contenido, console.log);
// leer(rutaFile, console.log);
borrar(rutaFile, console.log);