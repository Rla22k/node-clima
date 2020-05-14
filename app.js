const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then( resp => {
//         console.log('Lugar:', resp.direccion);
//         console.log('Latitud:', resp.lat);
//         console.log('Longitud:', resp.lng);
//     })
//     .catch (error => {
//         console.log('ERROR:', error);
//     });

// clima.getClima(40.41,-3.70)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(error => {
//         console.log('ERROR:', error);
//     })

// const getInfo = (direccion) => {

//     console.log("DIR:",direccion);

//     lugar.getLugarLatLng(direccion)
//         .then (resp => {
//             clima.getClima(resp.lat, resp.lng)
//                 .then(resp2 => {
//                     console.log(`El clima de ${direccion} es de ${resp2}`);
//                 })
//                 .catch(err2 => {
//                     console.log(`No se puede obtener el clima de las coordenadas ${resp.lat}, ${resp.lng}`);
//                 })
//         })
//         .catch (err1 => {
//             console.log(`No se ha podido determinar la localización de ${direccion}`);
//         });

// }

const getInfo = async (direccion) => {
    
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        console.log(`El clima de ${coords.direccion} es de ${temp}`);

    } catch (e) {
        console.log(`No se puede obtener el clima de ${direccion}`, e);
    }


}

getInfo(argv.direccion);