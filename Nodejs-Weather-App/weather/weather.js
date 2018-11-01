const request = require('request');

var getWeather = (lat, lng, callback) => {
    request ({
        url:`https://api.darksky.net/forecast/05ce85671f38b7af1a705055c4ce5067/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Dark Sky API server');
        } else if (response.statusCode === 400){
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });

        }
    });
};

module.exports.getWeather = getWeather;
