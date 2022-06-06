import React, { useState } from "react";
import "./App.css";
const api = {
 
  base: "https://api.openweathermap.org/data/2.5/",
};
let lat = 0;
let lon = 0;

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [geo, setGeo] = useState({});

  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=

  // https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `
        ${api.base}direct?q=${query}&limit=5&appid=      )
        .then((res) => res.json())
        .then((result) => {
          setGeo(result);
          setQuery("");

          // console.log(result);

          lat = result[0].lat;
          lon = result[0].lon;
          // console.log(lat, lon);

         
        });
        
          
          }

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
      <div
        className="app"
        // typeof (weather.main !== "undefined")
        //   ? weather.main.temp > 16
        //     ? "app warm "
        //     : "app"
        //   : "app"
      >
        {" "}
        <main>
          <div className="search-box">
            <input
              className="search-bar"
              type="text"
              placeholder="Search ..."
              onChange={(e) => setQuery(e.target.value)}
              query={query}
              onKeyPress={search}
            />
          </div>

          {typeof weather.main != "undefined"
            ? App(
                <div>
                  <div className="location-box">
                    <div className="location"> Bilston, uk</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                  <div className="weather-box">
                    <div className="temp">{Math.round(weather.main.temp)}c</div>
                  </div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              )
            : ""}
        </main>
      </div>
    );
  };
}
