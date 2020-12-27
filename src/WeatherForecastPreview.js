import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css"


export default function WeatherForecastPreview(props){
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
return (`${temperature} °C`)
    }
    
    return (
     <div className="WeatherForecastPreview col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{hours()}</h5>
              <span><WeatherIcon code={props.data.weather[0].icon} /></span>
                <strong>{temperature()}</strong> | <span>10°</span>
              </div>
            </div>
</div>
  );
}