import react, {useState} from "react";
import weather from "./Weather";
import "./Weather.css";

export default function CurrentTemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit(){
    return(props.celsius *9)/5 +32;
}


if (unit === "celsius"){
return(
<span className="CurrentTemperature"> 
    {Math.round(props.celsius)} { }
     °C
     /
     <a href="/" onClick={showFahrenheit}>°F</a> 
    
     </span> 
     ); } else { 
         
         return <span className="CurrentTemperature"> 
    {Math.round(fahrenheit())} { }
     <a href="/" onClick={showCelsius}>°C</a>
     /
    °F
    
     </span> 
     }
     }