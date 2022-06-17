/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState } from "react";
import { useEffect } from "react";
//import "./App.css";
import SearchIcon from '@mui/icons-material/Search';

// const api = {
//   key: process.env.API_KEY,
//   base: process.env.API_BASE,
//   base1: process.env.API_BASE1,
// };

export default function App() {
  const [city, setCity] = useState("Bilston");
  const [weather, setWeather] = useState({});
  const [geo, setGeo] = useState([]);

  // useEffect(()=>{
  //   handleGeo();
  // },[])


      
 const handleGeo = (e) => {
    
    if (e.key === "Enter" || e.type === "click") {
      fetch(
        `
   ${process.env.REACT_APP_API_BASE1}direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity({city: result[0].name,
          country: result[0].country})
          const lat = result[0].lat;
          const lon = result[0].lon;
         console.log(result)

         
          return fetch(`
                ${process.env.REACT_APP_API_BASE}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setWeather({ temp: data.current.temp,
                            weather: data.current.weather[0].description });
              
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
      <div className="flex">
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
            query ={city}
           value ={city}
         
          />
     
         <button onClick={handleGeo} className="btn" fontSize="large">Search</button>
        </div>
        </div>
        <div>
          <div className="location-box">
            <div className="location">{city.city} , {city.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp"> 
         {Math.round(weather.temp)}c
         </div>
            <div className="weather">{weather.weather}</div>
          </div>
        </div>
    
      </main>
    </div>
  );
}
