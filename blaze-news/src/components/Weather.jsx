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

const date = new Date();
const currentMonth = date.getMonth() + 1;
console.log(currentMonth);

const winter = [
  {
    id: 1,
    title:
      "Vitamin D Deficiency on the Rise: Experts Urge Sun Exposure and Supplements",
    description:
      "With shorter days and less sunlight, vitamin D deficiency is becoming a growing concern. Experts recommend spending some time outdoors daily, especially during midday when the sun's rays are strongest. For those with limited sun exposure, vitamin D supplements might be beneficial.",
  },
  {
    id: 2,
    title:
      "Winter Blues Affecting Millions: Therapists Recommend Seasonal Affective Disorder Treatment",
    description:
      "The shorter days and colder weather can contribute to Seasonal Affective Disorder (SAD), a type of depression. Symptoms include fatigue, overeating, and difficulty concentrating. Light therapy, exercise, and spending time outdoors can help alleviate SAD symptoms.",
  },
  {
    id: 3,
    title: "Heart Health Warning: Cold Weather Increases Risk of Heart Attacks",
    description:
      "Experts warn that cold weather can increase the risk of heart attacks. It's essential to bundle up warmly, avoid strenuous outdoor activities in extreme cold, and manage underlying heart conditions.",
  },
  {
    id: 4,
    title: "Dry Skin Alert: Skincare Routine Must Be Adjusted for Winter",
    description:
      "Cold, dry air can wreak havoc on your skin. Dermatologists recommend using gentle cleansers, hydrating moisturizers, and avoiding hot showers to maintain skin health during winter.",
  },
  {
    id: 5,
    title:
      "Boost Immunity Naturally: Experts Recommend Diet and Lifestyle Changes",
    description:
      "Strengthening your immune system is crucial during winter to fight off colds and flu. Consuming nutrient-rich foods, getting enough sleep, managing stress, and regular exercise can help boost your body's defenses.",
  },
];

const spring = [
  {
    id: 1,
    title:
      "Spring Allergies on the Rise: Experts Recommend Over-the-Counter Relief and Prevention Tips",
    description:
      "As temperatures rise and flowers bloom, allergy sufferers are bracing for a season of discomfort. Experts recommend over-the-counter antihistamines, nasal sprays, and avoiding triggers like pollen to manage symptoms effectively.",
  },
  {
    id: 2,
    title:
      "Embrace the Outdoors: Studies Link Spending Time in Nature to Improved Mental Health",
    description:
      "With the arrival of spring, there's no better time to reconnect with nature. Spending time outdoors has been linked to reduced stress, increased creativity, and improved overall well-being.",
  },
  {
    id: 3,
    title:
      "Spring Cleaning Your Diet: Nutritionists Encourage Incorporating Seasonal Produce",
    description:
      "Spring is the perfect time to refresh your diet with fresh, seasonal produce. Incorporating fruits and vegetables like strawberries, spinach, and asparagus can provide essential vitamins and minerals.",
  },
  {
    id: 4,
    title:
      "Sun Safety Reminder: Dermatologists Urge Sunscreen Use and Protective Clothing",
    description:
      "As the sun's rays become stronger, it's essential to protect your skin. Dermatologists recommend using broad-spectrum sunscreen with an SPF of 30 or higher, wearing protective clothing, and seeking shade during peak sun hours.   ",
  },
  {
    id: 5,
    title:
      "Spring into Fitness: Personal Trainers Share Tips for Getting Active Outdoors",
    description:
      "Warmer weather encourages outdoor activities. Personal trainers suggest incorporating exercises like hiking, biking, and swimming to improve fitness levels and enjoy the spring season.",
  },
];

const summer = [
  {
    id: 1,
    title:
      "Beat the Heat: Experts Warn of Rising Temperatures and Offer Hydration Tips",
    description:
      "As summer temperatures soar, health experts are urging people to stay hydrated and take precautions to prevent heat-related illnesses. Drinking plenty of water, limiting outdoor activities during peak hours, and wearing loose-fitting, light-colored clothing are essential.",
  },
  {
    id: 2,
    title:
      "Sun Safety Crucial: Dermatologists Stress Importance of Sunscreen and Protective Measures",
    description:
      "With increased sun exposure, the risk of skin damage rises. Dermatologists emphasize the importance of using broad-spectrum sunscreen with an SPF of 30 or higher, wearing protective clothing, and seeking shade during peak sun hours.   ",
  },
  {
    id: 3,
    title:
      "Summer Body Goals: Fitness Experts Share Tips for Achieving a Healthy Glow",
    description:
      "The desire for a summer body often intensifies during this season. Fitness experts recommend a balanced diet, regular exercise, and adequate sleep to achieve a healthy and toned physique.",
  },
  {
    id: 4,
    title:
      "Food Poisoning Risk Increases: Health Officials Issue Food Safety Guidelines",
    description:
      "Warmer temperatures create ideal conditions for bacteria growth, increasing the risk of food poisoning. Proper food handling, cooking, and storage are crucial to prevent illness.",
  },
  {
    id: 5,
    title:
      "Mental Health Matters: Experts Encourage Outdoor Activities and Stress Management",
    description:
      "Summer is a time for relaxation and rejuvenation. Spending time outdoors, engaging in hobbies, and practicing stress management techniques can contribute to improved mental health and overall well-being.",
  },
];

const monsoon = [
  {
    id: 1,
    title:
      "Monsoon Mayhem: Experts Warn of Increased Risk of Waterborne Diseases",
    description:
      "With heavy rainfall comes the risk of waterborne diseases like typhoid, cholera, and hepatitis A. Health officials are urging people to consume boiled or purified water, practice proper hygiene, and get vaccinated if necessary.",
  },
  {
    id: 2,
    title:
      "Rainy Day Blues: Experts Suggest Tips to Combat Seasonal Affective Disorder",
    description:
      "While the monsoon brings relief from the summer heat, it can also contribute to low mood and decreased energy levels. Engaging in indoor activities, spending time with loved ones, and practicing relaxation techniques can help alleviate seasonal affective disorder symptoms.",
  },
  {
    id: 3,
    title: "Monsoon Weight Gain: Nutritionists Offer Tips for Healthy Eating",
    description:
      "Rainy days often tempt us to indulge in comfort food. Nutritionists recommend focusing on whole grains, lean proteins, and plenty of fruits and vegetables to maintain a healthy weight during the monsoon season.",
  },
  {
    id: 4,
    title:
      " Skincare Concerns: Dermatologists Share Tips for Moisturized and Healthy Skin",
    description:
      "Increased humidity during the monsoon can lead to skin problems like acne and fungal infections. Dermatologists suggest using gentle cleansers, oil-free moisturizers, and avoiding oily makeup to keep skin healthy.",
  },
  {
    id: 5,
    title:
      " Monsoon Workout Challenges: Fitness Experts Share Indoor Exercise Tips",
    description:
      "Rainy weather can disrupt outdoor exercise routines. Fitness experts recommend home workouts, online fitness classes, and indoor sports to stay active and fit during the monsoon season.",
  },
];

const autumn = [
  {
    id: 1,
    title: "Autumn Allergies: Experts Share Tips to Manage Seasonal Discomfort",
    description:
      "As leaves change color and fall, allergy sufferers may experience increased symptoms. Over-the-counter medications, nasal sprays, and air purifiers can help manage autumn allergies.",
  },
  {
    id: 2,
    title:
      "Boost Your Immunity: Experts Recommend Healthy Habits for Cold and Flu Season",
    description:
      "With the changing seasons comes an increased risk of colds and flu. Getting enough sleep, eating a balanced diet, and regular exercise can help strengthen the immune system",
  },
  {
    id: 3,
    title: "Seasonal Affective Disorder (SAD): Tips to Combat the Winter Blues",
    description:
      "Shorter days and decreased sunlight can contribute to SAD. Light therapy, spending time outdoors, and engaging in physical activity can help improve mood and energy levels.",
  },
  {
    id: 4,
    title: "Cozy Comfort: Home and Lifestyle Trends for Autumn",
    description:
      "As the weather cools down, many people look to create a warm and inviting atmosphere at home. Experts share tips on interior design, home decor, and creating a cozy ambiance.",
  },
  {
    id: 5,
    title: "Autumn Skincare: Transitioning Your Routine for Cooler Weather",
    description:
      "With the change in seasons, skin requires extra care. Dermatologists recommend using richer moisturizers, exfoliating regularly, and protecting the skin from cold, dry air.",
  },
];

export const Weather = () => {
  const [button, setButton] = useState(false);
  const [input, setInput] = useState();
  const [weatherData, setWeatherData] = useState(null);

  function handleInput(e) {
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
      <div className="flex w-full justify-center  ">
        <input
          type="text"
          placeholder="Enter your city"
          onChange={handleInput}
          className="input input-bordered rounded-lg"
        />{" "}
        <br />
        &nbsp;
        <button
          onClick={() => getWeather()}
          className="btn btn-gray rounded-lg"
        >
          Check Weather
        </button>
      </div>

      {weatherData != null && (
        <>
          <div className="border border-zinc-900 bg-zinc-900 rounded-lg p-5 mx-3 my-5 md:mx-8 lg:mx-300">
            <div className="flex justify-between">
              <div className="text-3xl font-bold ">
                📍{weatherData.name}, {weatherData.sys.country}
                <div className="text-sm font-normal mt-auto mb-auto">
                  &nbsp;&nbsp;&nbsp;⏲{weatherData.coord.lon},{" "}
                  {weatherData.coord.lat}
                </div>
              </div>
            </div>
            <div className="flex-row md:flex justify-between px-1 py-10 md:px-1 md:py-0 lg:mx-12">
              <div className="block ml-auto mr-auto w-1/2 md:ml-0 md:mr-0 md:w-1/3 md:py-2">
                {weatherData.weather[0].main == "Clear" && (
                  <img
                    src={ClearSky}
                    alt="weather-icon"
                    className="w-60 md:w-80"
                  />
                )}
                {weatherData.weather[0].main == "Clouds" && (
                  <img
                    src={BrokenClouds}
                    alt="weather-icon"
                    className="w-60 md:w-80 mt-auto mb-auto"
                  />
                )}
                {weatherData.weather[0].main == "Drizzle" && (
                  <img
                    src={FewClouds}
                    alt="weather-icon"
                    className="w-60 md:w-80"
                  />
                )}
                {weatherData.weather[0].main == "Rain" && (
                  <img src={Rain} alt="weather-icon" className="w-60 md:w-80" />
                )}
                {weatherData.weather[0].main == "Thunderstorm" && (
                  <img
                    src={Thunderstorm}
                    alt="weather-icon"
                    className="w-60 md:w-80"
                  />
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
                <div className="text-3xl text-blue-200 font-bold py-2 md:py-0 md:pb-0">
                  {weatherData.weather[0].main}
                </div>
                <div className="text-xl text-blue-200 mb-6">
                  {weatherData.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.weather[0].description.slice(1)}
                </div>
              </div>
              <div className="py-10 md:py-12 md:mt-auto md:mb-auto border rounded-xl p-7 md:p-1">
                <div className="text-center justify-between text-lg py-2 md:text-center flex md:flex-wrap md:text-sm">
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Wind{" "}
                    <div className="font-normal text-blue-100 ">
                      {weatherData.wind.speed} km/h
                    </div>{" "}
                  </div>
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Gust{" "}
                    <div className="font-normal text-gray-100">
                      {weatherData.wind.gust} km/h
                    </div>{" "}
                  </div>
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Humidity{" "}
                    <div className="font-normal text-gray-100">
                      {weatherData.main.humidity} %
                    </div>
                  </div>
                </div>
                <div className="text-center justify-between text-lg py-2 md:text-center flex md:flex-wrap md:text-sm mt-5">
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Pressure{" "}
                    <div className="font-normal text-gray-100">
                      {weatherData.main.pressure} mB
                    </div>
                  </div>
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Cloud Cover{" "}
                    <div className="font-normal text-gray-100">
                      {weatherData.clouds.all} %
                    </div>
                  </div>
                  <div className="px-1 md:px-3 font-bold text-blue-200">
                    Visibilty{" "}
                    <div className="font-normal text-gray-100">
                      {weatherData.visibility / 1000} km
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center md:text-left">
              Powered by ©️ OpenWeather API.
            </p>
          </div>
          <div className="divider divider-info my-10">
            Best Practices for This Weather Season
          </div>
          { currentMonth == 7 || currentMonth == 8 || currentMonth == 9 ?
          monsoon.map((item,i)=>(
            <>
            <div className="mx-4 md:mx-24 lg:mx-40 my-2 text-sm text-center" id={i}>
              <div className="bg-base-200 collapse rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-900 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  {item.title}
                </div>
                <div className="collapse-content text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            </>
          ))            
          : null}

          { currentMonth== 10 ?
          autumn.map((item,i)=>(
            <>
            <div className="mx-4 md:mx-24 lg:mx-40 my-2 text-sm text-center" id={i}>
              <div className="bg-base-200 collapse rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  {item.title}
                </div>
                <div className="collapse-content text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            </>
          ))            
          : null}

          { currentMonth == 11 || currentMonth == 12 || currentMonth == 1 ?
          winter.map((item,i)=>(
            <>
            <div className="mx-4 md:mx-24 lg:mx-40 my-2 text-sm text-center" id={i}>
              <div className="bg-base-200 collapse rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  {item.title}
                </div>
                <div className="collapse-content text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            </>
          ))            
          : null}

          { currentMonth == 2 || currentMonth == 3 ?
          spring.map((item,i)=>(
            <>
            <div className="mx-4 md:mx-24 lg:mx-40 my-2 text-sm text-center" id={i}>
              <div className="bg-base-200 collapse rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  {item.title}
                </div>
                <div className="collapse-content text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            </>
          ))            
          : null}

          { currentMonth == 4 || currentMonth == 5 || currentMonth == 6 ?
          summer.map((item,i)=>(
            <>
            <div className="mx-4 md:mx-24 lg:mx-40 my-2 text-sm text-center" id={i}>
              <div className="bg-base-200 collapse rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  {item.title}
                </div>
                <div className="collapse-content text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            </>
          ))            
          : null}
        </>
      )}
    </>
  );
};
