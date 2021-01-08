const request = require('postman-request')
//weatherstack url
const url ='http://api.weatherstack.com/current?access_key=0394f78f3876a54a71655a23d096c115&query=37.8267,-122.4233'

request({ url:url },(error,response)=> {
    const data= JSON.parse(response.body)
    console.log(data.current)
})