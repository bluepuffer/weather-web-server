const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.meteomatics.com/2023-02-02T00:00:00Z/t_2m:C,relative_humidity_2m:p/35.771626,-78.780665/json'

    request({ url, json: true }, (error, { body }) => {
        // if (error) {
        //     callback('Unable to connect to weather service!', undefined)
        // } else if (body.error) {
        //     callback('Unable to find location', undefined)
        // } else {
        //     callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        // }
        callback(undefined, ' It is currently gppd degress out. There is a 0% chance of rain.')
    })
}

module.exports = forecast