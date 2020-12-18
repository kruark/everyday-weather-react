import react from "react";
export default function FormattedDate(props){

 
let todayDate = props.date.getDate();

let dayIndex = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day = days[dayIndex];

let monthIndex = props.date.getMonth();
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
let month = months[monthIndex];

let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let formatDate = `${day}, ${month} ${todayDate}`;
let formatTime = `${hours}:${minutes}`;


  return ( 
  <div className = "dateTime">
      {formatDate} 
      <br /> 
      {formatTime}
      </div>);
}