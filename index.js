const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();
//const base = 10;

// const [,,arg3='base=1']=process.argv;
// const [,base=1] = arg3.split("=");

// console.log(argv);
// console.log('base: yargs ', argv.base);
crearArchivo(argv.b, argv.l, argv.h)
.then(archivo=>console.log(archivo.rainbow, ' creado'))
.catch(err=>console.log(err));