////Consumiendo API con Async Await
// APIRequest es un modulo creado para separa código que se repite.

const APIRequest = require('../utilsFetchData.js');

const API_BASE = 'https://rickandmortyapi.com/api/';

async function main(){ 
    try {
        let todosLosPersonajes = await APIRequest(API_BASE + 'character/');
        let personaje = await APIRequest(API_BASE + 'character/' + todosLosPersonajes.results[0].id);
        let origenPersonaje = await APIRequest(personaje.origin.url);
        
        console.log(todosLosPersonajes.info.count)
        console.log(personaje.name);
        console.log(origenPersonaje.dimension);
        console.log('Terminando Proceso..')
        
      } catch (error) {
        console.error(error);
      }
}

console.log('Iniciando Proceso..')
main();