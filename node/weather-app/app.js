const axios = require('axios')

const url = 'http://api.weatherstack.com/current?access_key=deb6dcb190236549e28ca3656e11ffbb&query=37.8267,-122.4233&units=m'

axios.get(url).then((response) => {
    if (response.data.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.data.current.weather_descriptions[0] + '. It is currently ' + response.data.current.temperature + ' degress out. It feels like ' + response.data.current.feelslike + ' degress.')
    }
}).catch((error) => {
    console.log('Unable to connect to weather service!')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2VybWFuOTY5IiwiYSI6ImNrOG5yM2djejExNG8zZXFzamlvdm1hOWEifQ.a8w_cVsU16T8WPw_lzY-sw';

axios.get(geocodeURL).then((response) => {
    if (response.data.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const longitude = response.data.features[0].center[0];
        const latitude = response.data.features[0].center[1];
    
        console.log(latitude, longitude);
    }
}).catch((error) => {
    console.log('Unable to connect to location service!');
});

// console.log('Starting')


// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)


// console.log('Stopping')

// OUTPUT
// Starting
// Stopping
// 0 Second Timer
// 2 Second Timer