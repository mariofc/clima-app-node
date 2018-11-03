const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clina',
        demand: true
    }
}).argv;

console.log(argv.direccion);

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `Temperatura de ${direccion} es ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }


};


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//Forma 1
// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);

//         clima.getClima(resp.lat, resp.lng)
//             .then(resp => {
//                 console.log(resp);
//                 console.log(`Temperatura: ${resp.temp}`);
//             });

//     })
//     .catch(e => console.log(e));