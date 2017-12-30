const { GOOGLE_MAP_URL, FORCATS_IO_URL } = require('./urls')
const { FORCAST_KEY } = require('./config');

const axios = require('axios');
const getTemperature = (address) => {
    axios.get(`${GOOGLE_MAP_URL}${address}`).
    then((response) => {
        const { lat, lng } = response.data.results[0].geometry.location;
        return axios.get(`${FORCATS_IO_URL}${FORCAST_KEY}/${lat},${lng}`);
        console.log(error);
    }).then((response) => {
        console.log(response.data.currently.temperature);
    }).catch((error) => {
        console.log(error);
    })
}


module.exports = {
    getTemperature
}