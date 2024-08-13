//TODAY
//https://api.openweathermap.org/data/2.5/weather?q=dwarahat&appid=8237cab4faabbc43f64c9a1cdf207a6a
//API 8237cab4faabbc43f64c9a1cdf207a6a

//FORECAST
//https://api.openweathermap.org/data/2.5/forecast?q=dwarahat&appid=8237cab4faabbc43f64c9a1cdf207a6a

//AQI
//http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=29.7760&lon=79.4268&appid=8237cab4faabbc43f64c9a1cdf207a6a

import { useState } from "react";
import BrokenClouds from "../../public/images/broken_clouds.svg"
import ClearSky from "../../public/images/clear_sky.svg"
import FewClouds from "../../public/images/few_clouds.svg"
import Mist from "../../public/images/mist.svg"
import Rain from "../../public/images/rain.svg"
import ScatteredClouds from "../../public/images/scattered_clouds.svg"
import ShowerRain from "../../public/images/shower_rain.svg"
import Snow from "../../public/images/snow.svg"
import Thunderstorm from "../../public/images/thunderstorm.svg"

export const Weather = () => {
  const [button, setButton] = useState(false);
  const [weatherData, setWeatherData] = useState(null);


  async function getWeather(){
    const getData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=dwarahat&appid=8237cab4faabbc43f64c9a1cdf207a6a");
    const getDataJSON = await getData.json();
    setWeatherData(getDataJSON);
    setButton(true);

    
  }

  
  return (
    <>
      {!button ? (
        <div className="hero bg-black-200 pt-36">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-blue-300">
                Weather the Day with Blaze.
              </h1>
              <p className="py-6">
                Blaze Weather provides fast, accurate forecasts powered by the
                OpenWeather API, ensuring you are always prepared for any
                conditions. Get real-time updates and stay ahead of the weather
                with Blaze.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-24"></div>
      )}

      <div className=" text-center">
        <input
          type="text"
          placeholder="Enter your city"
          className="input input-bordered w-full max-w-xs rounded-lg"
        />
        &nbsp;
        <button
          onClick={() => getWeather()}
          className="btn btn-primary rounded-lg"
        >
          Check Weather
        </button>
      </div>
      {weatherData!=null && (
        <>
        
        <div className="border rounded-lg p-5 mx-16 my-5 md:mx-20 lg:mx-36"> 
        <div className="flex justify-between">
          <div className="text-3xl font-bold">📍{weatherData.name}, {weatherData.sys.country}</div>
          <div className="text-xl">{weatherData.coord.lon} {weatherData.coord.lat}</div>          
        </div>       
        <div className="flex-row md:flex justify-between px-10">
        <div className="block ml-auto mr-auto w-1/2 md:ml-0 md:mr-0 md:w-1/3">
          {weatherData.weather[0].description == 'clear sky' && <img src={ClearSky} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'few clouds' && <img src={FewClouds} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'scattered clouds' && <img src={ScatteredClouds} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'broken clouds' && <img src={BrokenClouds} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'shower rain' && <img src={ShowerRain} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'rain' && <img src={Rain} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'thunderstorm' && <img src={Thunderstorm} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'snow' && <img src={Snow} alt="" className="w-60 md:w-80"/>}
          {weatherData.weather[0].description == 'mist' && <img src={Mist} alt="" className="w-60 md:w-80"/>}


        </div>
        <div className="text-center md:text-left ">
          <div className=" text-5xl lg:text-8xl md:text-6xl font-bold">{Math.floor((Math.floor(weatherData.main.temp))/10)}°C</div>
          <div>{weatherData.weather[0].main}</div>
          <div>{(weatherData.weather[0].description).charAt(0).toUpperCase() + (weatherData.weather[0].description).slice(1)}</div>
        </div>
        <div className="text-center md:text-left">        
        <div>Wind : {weatherData.wind.speed} km/h</div>
        <div>Wind Gust: {weatherData.wind.gust} km/h</div>
        <div>Humidity: {weatherData.main.humidity} %</div>
        <div>Pressure: {weatherData.main.pressure} mB</div>
        <div>Visibilty: {(weatherData.visibility)/1000} km</div>
        <div>Cloud Cover: {weatherData.clouds.all} %</div>
        </div>
        </div>
        </div>
        </>
      )}
    </>
  );
};
