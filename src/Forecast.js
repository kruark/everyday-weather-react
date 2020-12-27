import React, {useState} from "react";
import "./App.css";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./Weather.css"

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
  setForecast(response.data);
  setLoaded(true);
}

if (loaded && props.city === forecast.city.name) { 
  return (
  <div className="WeatherForecast row">
   <WeatherForecastPreview data={forecast.list[0]} />
  <WeatherForecastPreview data={forecast.list[1]} />
  <WeatherForecastPreview data={forecast.list[2]} />
  <WeatherForecastPreview data={forecast.list[3]} />
  <WeatherForecastPreview data={forecast.list[4]} />
  <WeatherForecastPreview data={forecast.list[5]} />

  </div>
);
} else {
let apiKey = "0266533ac4e8b61c19419a959a2b8aae";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleForecastResponse);
return null;
}
}