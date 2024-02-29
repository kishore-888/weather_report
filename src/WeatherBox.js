import React, { useState } from 'react';
import axios from "axios";

function WeatherBox() {

    const [city,setcity]= useState("")

    const [weather,setweather]= useState("")
    const [temp,settemp]= useState("")
    const [desc,setdesc]= useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    function getWeather()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a60a9f53c4fd94207d768eb63bb6d05`)
        weatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp) 
            setdesc(success.data.weather[0].description)
        })
    }
  return (
    <div className="bg-black p-20">
        <div className="bg-green-400 p-10 rounded-md">
      <h1 className="text-2xl font-medium">Weather Report</h1>
      <p>I can give you a weather report about your city!</p>
      <input onChange={handleCity} type="text" placeholder="Enter your City Name" className="border-2 border-black w-52 p-2 mt-4 rounded-md" /> <br></br>
      <button onClick={getWeather} className="bg-black text-white px-4 py-2 mt-4 rounded-md">Get Report</button>
      <div className="mt-2">
        <h2 className="font-bold text-orange-200 border bg-orange-400 rounded-md m-2 w-64"><b>Weather: </b>{weather}</h2>
        <p className="font-bold text-blue-700 border bg-white rounded-md m-2 w-64"><b>Temperature: </b>{temp}</p>
        <p className="font-bold text-green-200 border bg-green-500 rounded-md m-2 w-64"><b>Description: </b>{desc}</p>
      </div>
      </div>
    </div>
  );
}

export default WeatherBox;