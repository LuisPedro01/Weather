import React, { useState } from "react"
import './App.css';
import Search from "./components/search"
import ForeCast from "./components/forecast"
import CurrentWeather from "./components/weather"
import {API_WEATHER_URL} from "./api"
import {API_WEATHER_KEY} from "./api"

function App() {
//hooks
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

//api
  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${API_WEATHER_URL}/weather?lat=${lat}&lon=${long}&appid=${API_WEATHER_KEY}&units=metric`)
    const forecastFetch = fetch(`${API_WEATHER_URL}/forecast?lat=${lat}&lon=${long}&appid=${API_WEATHER_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label , ...weatherResponse});
      setForecast({ city: searchData.label , ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast}/>}
    </div>
  );
}

export default App;
