const axios = require('axios');

// Good
const appid = 'cae6ec1872e7dcc6089a295809fae3d5';
// Wrong
//const appid = 'cae6ec1872e7dcc60sadf295809fae3d5';
const units = 'metric';

const getClima = async (lat, lon) => {

    try {
        const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`);

        if (respuesta.status !== 200) {
            throw new Error('Error obteniendo respuesta de OpenWeatherMap');
        }

        return respuesta.data.main.temp;
    } catch {
        throw new Error('Error no controlado en petición');
    }

}

module.exports = {
    getClima
}