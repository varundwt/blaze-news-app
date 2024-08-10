//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//API 8237cab4faabbc43f64c9a1cdf207a6a

import { Link } from "react-router-dom"

export const Weather = () => {
  return (
    <div className="hero bg-black-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-blue-300">Weather the Day with Blaze.</h1>
      <p className="py-6">
      Blaze Weather provides fast, accurate forecasts powered by the OpenWeather API, ensuring you are always prepared for any conditions. Get real-time updates and stay ahead of the weather with Blaze.
      </p>
      <Link to='/weather/blazeweather'><button className="btn btn-primary rounded-lg">Check Weather</button></Link>
    </div>
  </div>
</div>
  )
}
