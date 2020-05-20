// console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?address=delhi').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data);
//         }
//     })
// })


const weatherLocation = document.querySelector('form');
const search = document.querySelector('input');

weatherLocation.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents the default behaviour which is reload the whoe browser.
    // instead it will reload only part 

    const location = search.value;
    // console.log(location);

    const locationMessage = document.querySelector('#location');
    const forecastMessage = document.querySelector('#forecast');

    const wind_speed_text = document.querySelector('#weather-widget-wind');
    const cloudiness_text = document.querySelector('#weather-widget-cloudiness');
    const pressure_text = document.querySelector('#weather-widget-pressure');
    const humidity_text = document.querySelector('#weather-widget-humidity');
    const geo_cords_text = document.querySelector('#weather-widget-geo-coords');

    
    locationMessage.textContent = 'Loading...'
    forecastMessage.textContent = '';
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                locationMessage.textContent = 'Unable to find Location!';
            } else {
                console.log(data);
                console.log( data.forecast.weather[0].description);
                forecastMessage.textContent = data.forecast.weather[0].description;
                locationMessage.textContent = data.address;
                
                console.log(data.forecast);

                const wData = data.forecast;
                const cord_lat = wData.coord['lat'];
                const cord_lon = wData.coord['lon'];
                // const w_condition = wData.weather[0].description;
    
                // const temp = wData.main.temp;
                // const feels_like = wData.main.feels_like;
                const pressure = wData.main.pressure;
                const humidity = wData.main.humidity;
                // const temp_min = wData.main.temp_min;
                // const temp_max = wData.main.temp_max;
                const wind_speed = wData.wind.speed;
                const cloudiness = wData.clouds.all;
    
                wind_speed_text.textContent = wind_speed + ' m/s';
                cloudiness_text.textContent = cloudiness + ' %';
                pressure_text.textContent = pressure + ' hpa';
                humidity_text.textContent = humidity + ' %';
                geo_cords_text.textContent = '{ lat: '+ cord_lat + ', lon: '+ cord_lon + ' }';
                
            }
        })
    })
})









// fetch('/weather?address=' + location).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//             locationMessage.textContent = 'Unable to find Location!';
//         } else {
//             console.log(data);
//             console.log( data.forecast.weather[0].description);
//             forecastMessage.textContent = data.forecast.weather[0].description;
//             locationMessage.textContent = data.address;
//         }
//     })
// })