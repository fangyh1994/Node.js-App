const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request ({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=ECAQ0N6gIFmJcPqScRmbvdufBstnZ4II&location=${encodedAddress}`,
            json: true
        }, (error, response, body)=>{
            if (error) {
                reject('Unable to connect to server.');
            } else if (body === undefined){
                reject('Unable to find that address.');
            } else if (body.info.statuscode === 0){
                resolve ({
                    address: `${body.results[0].locations[0].street},${body.results[0].locations[0].adminArea4}, ${body.results[0].locations[0].adminArea3}, ${body.results[0].locations[0].adminArea1}`,
                    latitude: `${body.results[0].locations[0].latLng.lat}`,
                    longitude: `${body.results[0].locations[0].latLng.lng}`
                })
            }
            //console.log(JSON.stringify(body,undefined,2));
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});