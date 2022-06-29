
const enter = document.querySelector('.btn');
//console.log(enter)
const locationElement = document.querySelector('.location');
//console.log(locationElement)
    const dateElement = document.querySelector('.date');
   const weatherElement = document.querySelector(".weather-value");
   //console.log(weatherElement)
    const temperatureElement = document.querySelector('.temperature-value');
    //console.log(temperatureElement)
    const humidityElement = document.querySelector('.humidity-value');
//console.log(humidityElement)

const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

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
})
.then(res => { if(res.ok){ return res.json();
} else{
    throw new Error("Network response Error");
}
}).then(data =>{console.log(data)



getWeather(city,data)
    

})
.catch((error)  => console.log("Fetch error:", error));
})

function getWeather(city,data){
     const weather = data.current.weather[0].description
 console.log(weather)

 const temperature = Math.floor(data.current.temp)
 console.log(temperature)
 const humidity = `${data.current.humidity }%`
 console.log(humidity)
 

    locationElement.textContent = city
    dateElement.textContent =dateBuilder(new Date())
    weatherElement.textContent = weather;
    temperatureElement.textContent = temperature;
    humidityElement.textContent = humidity;

}

