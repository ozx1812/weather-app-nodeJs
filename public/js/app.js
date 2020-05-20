// console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})

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
    
    locationMessage.textContent = 'Loading...'
    forecastMessage.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                locationMessage.textContent = 'Unable to find Location!';
            } else {
                console.log(data);
                console.log( data.forecast.weather[0].description);
                forecastMessage.textContent = data.forecast.weather[0].description;
                locationMessage.textContent = data.address;
            }
        })
    })
})






