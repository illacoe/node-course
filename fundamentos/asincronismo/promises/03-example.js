//Consumiendo API con Promesas
// APIRequest es un modulo creado para separa código que se repite.

const APIRequest = require('./utilsFetchData.js');

const API_BASE = 'https://rickandmortyapi.com/api/';

APIRequest(API_BASE + 'character/')
    .then((response) => {
        console.log(response.info.count)
        return APIRequest(API_BASE + 'character/' + response.results[0].id);
    })
    .then((response) => {
        console.log(response.name)
        return APIRequest(response.origin.url);
    })
    .then((response) => {
        console.log(response.dimension)
    })
    .catch((error) => console.error(error));