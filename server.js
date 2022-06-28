import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import { response } from "express";

let config = dotenv.config();

export const API_KEY = process.env.API_KEY;
console.log(API_KEY);
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", function (req, res) {
  const url = ` http://api.openweathermap.org/geo/1.0/direct?q=${req.body.city}&limit=5&appid=${process.env.API_KEY}`;
const config = {responseType:'json'}
  axios(  url, config ).then((response) => {
  const lat = response.data[0].lat
  const lon = response.data[0].lon
   
console.log(lat)

return axios(`
         https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`,config)
.then((response)=>res.json(response.data))})



  //           return fetch(`
  //           https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
  //             .then((res) => res.json())
  //             .then((data) => {
  //               console.log(data);
  //               setWeather({ temp: data.current.temp,
  //                             weather: data.current.weather[0].description });

  //             });
  //         });
  //         setCity("");

  //         console.log({city})
});

app.listen(3001, () => {
  console.log("Server started");
});
