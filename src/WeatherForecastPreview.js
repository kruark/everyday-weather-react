import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css"


export default function WeatherForecastPreview(props){
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperatureForecast() {
        let temperatureForecast = Math.round(props.data.main.temp);
return (`${temperatureForecast} °C`)
    }


    
    return (
     <div className="WeatherForecastPreview col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{hours()}</h5>
              <div><WeatherIcon code={props.data.weather[0].icon} /></div>
                <strong>{temperatureForecast()}</strong>
              </div>
            </div>
</div>
  );
}