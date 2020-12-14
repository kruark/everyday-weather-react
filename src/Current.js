import React from "react";
import "./App.css";

export default function Current() {
  let weatherData = {
    city: "New York",
    date: "Tuesday, November 24",
    time: "10:00 AM ET",
    description: "Partly cloudy",
    temperature: 13,
    high: 15,
    low: 11,
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png"
  };

  return (
    <div className="Current">
      <div className="row no-gutters">
        <div className="col-6">
          <div className="selectCityTemp">
            {" "}
             
            <span>
              <img
                src={weatherData.imgUrl}
                width="200"
                alt={weatherData.description}
              />
            </span>
            <p>
              {" "}
              {weatherData.temperature}
              <span></span>°{" "}
              <a href="#" className="active">
                C
              </a>
              |<a href="#">F</a>
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="selectCityInfo">
            <h1>{weatherData.city}</h1>
            <h4>{weatherData.date}</h4>
            <h4>{weatherData.time}</h4>
            <h4>{weatherData.description}</h4>
            <h4>
              {" "}
              High <span>{weatherData.high}</span>° | Low{" "}
              <span>{weatherData.low}</span>°
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}