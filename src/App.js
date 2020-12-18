import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}