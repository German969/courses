const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2VybWFuOTY5IiwiYSI6ImNrOG5yM2djejExNG8zZXFzamlvdm1hOWEifQ.a8w_cVsU16T8WPw_lzY-sw'

    axios.get(url).then(({ data }) => {
        if (data.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                longitude: data.features[0].center[0],
                latitude: data.features[0].center[1],
                location: data.features[0].place_name
            })
        }
    }).catch((error) => {
        callback('Unable to connect to location service')
    })
};

module.exports = geocode;