//TODAY
//https://api.openweathermap.org/data/2.5/weather?q=dwarahat&appid=8237cab4faabbc43f64c9a1cdf207a6a
//API 8237cab4faabbc43f64c9a1cdf207a6a

//FORECAST
//https://api.openweathermap.org/data/2.5/forecast?q=dwarahat&appid=8237cab4faabbc43f64c9a1cdf207a6a

//AQI
//http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=29.7760&lon=79.4268&appid=8237cab4faabbc43f64c9a1cdf207a6a

import { useState } from "react";
import BrokenClouds from "../../public/images/broken_clouds.svg";
import ClearSky from "../../public/images/clear_sky.svg";
import FewClouds from "../../public/images/few_clouds.svg";
import Mist from "../../public/images/mist.svg";
import Rain from "../../public/images/rain.svg";
import Snow from "../../public/images/snow.svg";
import Thunderstorm from "../../public/images/thunderstorm.svg";

export const Weather = () => {
  const [button, setButton] = useState(false);
  const [input, setInput] = useState();
  const [weatherData, setWeatherData] = useState(null);

  function handleInput(e){
    setInput(e.target.value);
    console.log(input);    
  }

  async function getWeather() {
    const getData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8237cab4faabbc43f64c9a1cdf207a6a`
    );
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
          onChange={handleInput}
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
      
      {weatherData != null && (
        <>
          <div className="border border-blue-500 bg-blue-900 rounded-lg p-5 mx-3 my-5 md:mx-8 lg:mx-30">
            <div className="flex justify-between">
              <div className="text-3xl font-bold ">
                📍{weatherData.name}, {weatherData.sys.country}
                <div className="text-sm font-normal mt-auto mb-auto">
                &nbsp;&nbsp;&nbsp;⏲{weatherData.coord.lon}, {weatherData.coord.lat}
              </div>
              </div>
              
            </div>
            <div className="flex-row md:flex justify-between px-1 py-10 md:px-1 md:py-0 lg:mx-12">
              <div className="block ml-auto mr-auto w-1/2 md:ml-0 md:mr-0 md:w-1/3 md:py-2">
                {weatherData.weather[0].main == "Clear" && (
                  <img src={ClearSky} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Clouds" && (
                  <img src={BrokenClouds} alt="weather-icon" className="w-60 md:w-80 mt-auto mb-auto" />
                )}
                {weatherData.weather[0].main == "Drizzle" && (
                  <img src={FewClouds} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Rain" && (
                  <img src={Rain} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Thunderstorm" && (
                  <img src={Thunderstorm} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Snow" && (
                  <img src={Snow} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Haze" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Mist" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Smoke" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Dust" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Fog" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Sand" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Ash" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Squall" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Tornado" && (
                  <img src={Mist} alt="weather-icon" className="w-60 md:w-80" />
                )}
              </div>
              <div className="text-center md:text-left md:mt-auto md:mb-auto lg:mt-auto lg:mb-auto">
                <div className="text-white text-5xl font-bold lg:text-8xl md:text-6xl md:h-20 lg:my-5">
                  {Math.floor(Math.floor(weatherData.main.temp) / 10)}°C
                </div>
                <div className="text-3xl text-blue-200 font-bold py-2 md:py-0 md:pb-0">{weatherData.weather[0].main}</div>
                <div className="text-xl text-blue-200 mb-6">
                  {weatherData.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.weather[0].description.slice(1)}
                </div>
              </div>
              <div className="py-10 md:py-12 md:mt-auto md:mb-auto border rounded-xl p-7 md:p-1">
              <div className="text-center justify-between text-lg py-2 md:text-center flex md:flex-wrap md:text-sm">
                <div className="px-1 md:px-3 font-bold text-blue-200">Wind <div className="font-normal text-blue-100 ">{weatherData.wind.speed} km/h</div> </div>
                <div className="px-1 md:px-3 font-bold text-blue-200">Gust <div className="font-normal text-gray-100">{weatherData.wind.gust} km/h</div> </div>
                <div className="px-1 md:px-3 font-bold text-blue-200">Humidity <div className="font-normal text-gray-100">{weatherData.main.humidity} %</div></div>                
              </div>
              <div className="text-center justify-between text-lg py-2 md:text-center flex md:flex-wrap md:text-sm mt-5">                
                <div className="px-1 md:px-3 font-bold text-blue-200">Pressure <div className="font-normal text-gray-100">{weatherData.main.pressure} mB</div></div>
                <div className="px-1 md:px-3 font-bold text-blue-200">Cloud Cover <div className="font-normal text-gray-100">{weatherData.clouds.all} %</div></div>
                <div className="px-1 md:px-3 font-bold text-blue-200">Visibilty <div className="font-normal text-gray-100">{weatherData.visibility / 1000} km</div></div>                
              </div>
              </div>
            </div>
            <p className="text-center md:text-left">Powered by ©️ OpenWeather API.</p>
          </div>
        </>
      )}
    </>
  );
};
