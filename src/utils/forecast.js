const request = require('request')

const forecast=(lati,longi,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=be368c0382cac3e86b54538c9974fe30&query="+lati+","+longi
request({ url, json: true },(error,{body})=>{
    if(error)
     {
         callback('Network not found',undefined)
     }
     else if(body.error)
     {
        callback('Location Not found',undefined)   
     }
     else
     {
         callback(undefined,'Temperature is '+body.current.temperature+' ,Precipitation is '+ body.current.precip+' and Weather is '+body.current.weather_descriptions[0])
     }
    })
}

module.exports=forecast