const request = require("request");


const forecast = (location, callback) => {

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        qs: {
          q: location
        },
        json:true,
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          // 'x-rapidapi-key': '1be88f46abmsh3b6959a84e99f0bp192397jsn28bb4ed48eab',// omij
          'x-rapidapi-key': '1d8731ba02msh165cf0a958edb15p19a970jsn88f4ffe82c00', // rakesh
          useQueryString: true
        }
      };


    request(options, (error, response, body) => {
        if (error) {
            callback('Unable to connect weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, body)
        }
    
        // console.log(body);
        return body;
    })
}

module.exports = forecast