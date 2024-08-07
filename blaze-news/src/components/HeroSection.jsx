import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const fetchD = await fetch(
      "https://api.thenewsapi.com/v1/news/all?api_token=3u7gqnpnHZrcA8y6quV5qySA7igdtpXJTiwYvKzT&language=hi&limit=3"
    );
    const fetchJSON = await fetchD.json();
    setData(fetchJSON.data);
    console.log(data);
    
  }
  
  return (
    <>
      <div className="divider divider-info">Latest News</div>
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Wayanad Landslide Update वायनाड में आए भूस्खलन के बाद अब तक करीब 300 लोगों की मौ</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
      </div>
    </>
  );
};
