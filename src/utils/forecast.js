const request = require('request')

const forecast = (longitude ,latitude ,callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=a7e1e61efe3bdc1b200d5d8620d50e77&query=' + latitude + ',' + longitude
  request({ url, json:true }, (error, { body }) => {
    if (error){
      callback('Unable to connect to weather service.',undefined)
    } else if(body.error) {
      callback('Unable to find location.',undefined)
    } else {
        callback(undefined, {
        temperature:body.current.temperature,
        precip: body.current.precip
      })
    }
  })
}

module.exports = forecast