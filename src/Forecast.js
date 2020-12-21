import React from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row weatherForecast no-gutters">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Monday</h5>
              <span>🌥</span>
              <div className="weather-forecast-temperature">
                <strong>13°</strong> | <span>10°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tuesday</h5>
              <span>☀️</span>
              <div className="weather-forecast-temperature">
                <strong>14°</strong> | <span>11°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wednesday</h5>
              <span>🌥</span>
              <div className="weather-forecast-temperature">
                <strong>13°</strong> | <span>12°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thursday</h5>
              <span>🌤</span>
              <div className="weather-forecast-temperature">
                <strong>13°</strong> | <span>10°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Friday</h5>
              <span>🌦</span>
              <div className="weather-forecast-temperature">
                <strong>14°</strong> | <span>10°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Saturday</h5>
              <span>🌦</span>
              <div className="weather-forecast-temperature">
                <strong>13°</strong> | <span>11°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
