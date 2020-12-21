import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import WeatherIcon from './WeatherIcon';
import CurrentTemperature from "./CurrentTemperature";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  let apiKey = "0266533ac4e8b61c19419a959a2b8aae";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      axios.get(apiUrl).then(showWeather);
    } else {
      alert`Please enter a city`;
    }
  }

  function showWeather(response) {
    setResult(
<div className = "currentWeather">
    <div className="row no-gutters">
        <div className="col">
   <h2>
 <WeatherIcon code = {response.data.weather[0].icon}/>
   <CurrentTemperature celsius = {response.data.main.temp} />
   </h2>   

<div className="col">
  <h1>
      {city}
  </h1>
  <h4><FormattedDate date = {new Date(response.data.dt*1000)} /></h4>
  <h4> {response.data.weather[0].main}</h4>
<h4>High {Math.round(response.data.main.temp_max)}° | Low {Math.round(response.data.main.temp_min)}°</h4>
<h4>Humidity: {response.data.main.humidity}%</h4>
</div>
</div>
</div>
 </div> 
    );
  
  }

  
  return (
    <div className = "citySearch">
   <form onSubmit={handleSubmit}>
      <div className="form-group">
      <div className="row">
        <div className="col-8">
           <input
          type="search"
          className="form-control"
          autoFocus={true}
          placeholder="Enter a city"
          onChange={updateCity}
           />
          </div>
          <div className="col-2">
           <button type="submit" className="btn btn-primary w-100 h-100">Search</button>
         </div>
         <div className="col-2">
           <button type="submit" className="btn btn-secondary w-100 h-100">Current</button>
         </div>
      </div>
 </div>
  </form>
  
      <p>{result}</p>
  
 </div>
  )}