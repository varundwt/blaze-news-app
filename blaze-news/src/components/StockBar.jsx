import { useEffect, useState } from "react";
import Up from "../../public/images/trending_up.svg";
import Down from "../../public/images/trending_down.svg";
export const StockBar = () => {
    const date = new Date();
const monthNames = [
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
  "December",
];
const showDate =
  monthNames[date.getMonth()] +
  " " +
  date.getDate() +
  ", " +
  date.getFullYear();


  const [myTime, setMyTime] = useState();

  function updateTime() {
    const showTime = new Date().toLocaleTimeString();
    setMyTime(showTime);
  }

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  });
  return (
    <>
    <div className="flex justify-between mx-4 my-2">
        <div>
          <div className="text-left text-sm font-semibold	sm:text-xl">
            Discover latest news
          </div>
          <div className="text-left text-sm font-semibold	sm:text-xl">
            through Blaze.
          </div>
        </div>
        <div className=" text-center">
          <div className="text-right text-xs sm:text-sm">{showDate}</div>
          <div className="text-right text-xs sm:text-sm">{myTime}</div>
        </div>
      </div>
      <div className="flex justify-between mx-4 my-2 text-xs sm:text-sm">
        <div>
          <div>ONGC</div>
          <div className="flex">
            <div className="text-green-500">7.27 </div>&nbsp;
            <img src={Up} className="h-4" />
          </div>
        </div>
        <div>
          <div>ADANIPORTS</div>
          <div className="flex ">
            <div className="text-green-500">9.45 </div>&nbsp;
            <img src={Up} className="h-4" />
          </div>
        </div>
        <div>
          <div>ICICIBANK</div>
          <div className="flex">
            <div className="text-red-500">-0.15 </div>&nbsp;
            <img src={Down} className="h-4" />
          </div>
        </div>
        <div>
          <div>TATAMOTORS </div>
          <div className="flex ">
            <div className="text-green-500">4.15 </div>&nbsp;
            <img src={Up} className="h-4" />
          </div>
        </div>
        <div>
          <div>TITAN</div>
          <div className="flex">
            <div className="text-red-500">-3.30 </div>&nbsp;
            <img src={Down} className="h-4" />
          </div>
        </div>
        <div>
          <div>WIPRO</div>
          <div className="flex ">
            <div className="text-green-500">5.75 </div>&nbsp;
            <img src={Up} className="h-4" />
          </div>
        </div>
      </div>
    </>
  )
}
