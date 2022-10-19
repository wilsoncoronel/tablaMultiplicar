const fs= require('fs');
const colors = require('colors');
const crearArchivo =async(base=5, bandera, hasta)=>{    
    try{
      
        let salida = "";
        let consola = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${ 'x'} ${i} = ${base*i}\n`;
            consola += `${base} ${ 'x'.yellow} ${i} = ${base*i}\n`;
        }
        if(bandera){
            console.log('<------------------------------------------------>'.green);
            console.log(`-------------------Tabla del ${colors.blue(base)}-------------------`.green);
            console.log('<------------------------------------------------>'.green);
            console.log(consola)
        }
        fs.writeFileSync(`./salida/tabla_${base}.txt`,salida); 
        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
}
module.exports= {
    crearArchivo,
}