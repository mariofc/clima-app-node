const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);

    // console.log(resp.data);

    console.log(JSON.stringify(resp.data));

    return resp.data.main.temp;

    // *** Retorno como objeto
    // return {
    //     temp
    // }
};

module.exports = {
    getClima
}