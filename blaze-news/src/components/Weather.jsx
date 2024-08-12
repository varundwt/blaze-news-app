//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//API 8237cab4faabbc43f64c9a1cdf207a6a

import { useState } from "react";
export const Weather = () => {
  const [button, setButton] = useState(false);

  function handleClick() {
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
      ) : <div className="m-24"></div>}

      <div className=" text-center">
        <input
          type="text"
          placeholder="Enter your city"
          className="input input-bordered w-full max-w-xs rounded-lg"
        />
        &nbsp;
        <button
          onClick={() => handleClick()}
          className="btn btn-primary rounded-lg"
        >
          Check Weather
        </button>
      </div>
    </>
  );
};
