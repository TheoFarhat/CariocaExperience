const axios = require("axios");


const getWeather = async(req, res) => {
    try {
        const response = await axios.get("https://api.hgbrasil.com/weather?array_limit=2&fields=only_results,condition_code,description&key=14f9279f&woeid=455825");
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}


module.exports = {
    getWeather
}