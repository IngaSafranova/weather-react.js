/* eslint-disable no-unused-vars */
import React, {useId,useState } from "react";
//import "./App.css";
const api = {
<<<<<<< HEAD
  key: process.env.API_KEY,
  base: process.env.API_BASE,
  base1: process.env.API_BASE1,
=======
 
  base: "https://api.openweathermap.org/data/2.5/",
>>>>>>> adab88e6a057471f6fbbbc9f2cf345965aaaae72
};

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [geo, setGeo] = useState([]);

  


      
 const handleGeo = (e) => {
    
    if (e.key === "Enter" || e.type === "click") {
      fetch(
        `
              ${api.base1}direct?q=${city}&limit=5&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          const lat = result[0].lat;
          const lon = result[0].lon;
         console.log(lat)

         
          return fetch(`
                ${api.base}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setWeather({ temp: data.current.temp });
              
            });
        });
        setCity("");
    }
  };

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
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Search ..."
            onChange={(e) => setCity(e.target.value)}
            query={city}
           value ={city}
          />
          <button onClick={handleGeo}>Search</button>
          <div></div>
        </div>

        <div>
          <div className="location-box">
            <div className="location">{city}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            {/* <div className="temp"> 
         {Math.round(weather.data.current.temp)}c
         </div> */}
            {/* <div className="weather">{weather.data.weather[0].main}</div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
