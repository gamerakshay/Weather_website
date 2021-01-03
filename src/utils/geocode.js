const request = require('request')
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiZ2FtZXJha3NoYXkiLCJhIjoiY2tqOTA4Nm5tMTJhZjJ5cDVpc2l5dWNheSJ9.268Qs_7XAJGwtWW7RL2vRw"
    request({ url , json:true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect',undefined)
        }
        else if(body.features.length===0)
        {   
         callback('Unable to find location',undefined)
        }
        else
        {
            callback(undefined,{
                lattitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                place : body.features[0].place_name
            })
        }
   })
}
module.exports=geocode