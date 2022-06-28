
const enter = document.querySelector('.btn');
//console.log(enter)

enter.addEventListener('click',(event)=>{
    event.preventDefault();
    const city = document.querySelector('.search').value;
    //console.log(city)
   // console.log(city)
    //return city;
    


fetch ('/weather',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({city})
}).then(res =>res.json()).then(data =>{console.log(data)})
})

const locationElement = document.querySelector('.location');
const dateElement = document.querySelector('.date');
const weatherElement = document.querySelector('.weather-status');
const temperatureElement = document.querySelector('.temperature-status');
const humidityElement = document.querySelector('.humidity-status');

function setWeather(data,city){
    locationElement.textContent = city
    dateElement.textContent =new Date()
    weatherElement.textContent = data.current.weather[0].description
}
