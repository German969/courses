const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=deb6dcb190236549e28ca3656e11ffbb&query=' + latitude + ',' + longitude + '&units=m'

    axios.get(url).then(({ data }) => {
        if (data.error) {
            callback('Unable to find location')
        } else {
            const { weather_descriptions, temperature, feelslike } = data.current
            const message = weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress.'
            
            callback(undefined, message)
        }
    }).catch((error) => {
        callback('Unable to connect to weather service!')
    })
}

module.exports = forecast