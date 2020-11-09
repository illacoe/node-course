
// Console
// Con console podemos imprimir todo tipo de valores por nuestra terminal.

// console.log: recibe cualquier tipo y lo muestra en el consola.
// console.info: es equivalente a log pero es usado para informar.
// console.error: es equivalente a log pero es usado para errores.
// console.warn: es equivalente a log pero es usado para warning.
console.group('Esto es un console Log, Info, Error y Warn');
    console.log('Este es un console Log');
    console.info('Esto es un console Info');
    console.error('Esto es un console Error');
    console.warn('Esto es un console Warn');
console.groupEnd('Esto es un console Log, Info, Error y Warn');
// console.table: muestra una tabla a partir de un objeto.
const banks = [
    { id: 1, name: 'SANTANDER' },
    { id: 2, name: 'CHILE' },
    { id: 3, name: 'ESTADO' }
  ];
console.group('Esto es un console Table');
    console.table(banks);
console.groupEnd('Esto es un console Table');
// console.count: inicia un contador autoincremental.
// console.countReset: reinicia el contador a 0.
console.group('Esto es un console Count y CountReset');
    console.count('veces');
    console.count('veces');
    console.count('veces');
    console.countReset('veces');
    console.count('veces');
    console.count('veces');
    console.count('veces');
console.groupEnd('Esto es un console Count y CountReset');

// console.time: inicia un cronometro en ms.
// console.timeEnd: Finaliza el cronometro.

console.group('Esto es un console Time y TimeEnd');
    console.time('El proceso se tardo');
    console.log('Iniciando Proceso..')
    for (i = 0; i < 10; i++) {
        if(i===9){
            console.log('Proceso..');
        }
    }
    console.timeEnd('El proceso se tardo');
console.groupEnd('Esto es un console Time');

// console.group: permite agrupar errores mediante identación.
// console.groupEnd: finaliza la agrupación.
console.group('Esto es un console Group y GroupEnd');
    console.group('Proceso numero 1');
        console.log('Iniciando Proceso..');
        console.log('Terminando Proceso..');
    console.groupEnd('Proceso numero 1');
        console.group('Proceso numero 2');
        console.log('Iniciando Proceso..');
        console.log('Terminando Proceso..');
    console.groupEnd('Proceso numero 2');
console.groupEnd('Esto es un console Group y GroupEnd');

// console.clear: Limpia la consola.