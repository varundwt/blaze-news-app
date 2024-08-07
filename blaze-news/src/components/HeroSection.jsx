import { useState } from "react";
import General from "../utils/general.json"

const newsFeed = [{
    "id":1,
    "title": "Bangladesh Crisis Live Updates: Interim govt, headed by Nobel laureate Muhammad Yunus, to take oath tomorrow, says army chief",
    "context" : "Bangladesh Crisis Live Updates: India plans to host ousted Bangladesh Prime Minister Sheikh Hasina.",
    "image" : "../../public/images/card-images/1.jpeg",
    "detail" : "Bangladesh Crisis Live Updates: Bangladesh Army Chief General Waker-Uz-Zaman in a statement on Wednesday said that interim government, headed by Nobel laureate Prof Muhammad Yunus, will take oath on Thursday. Former Bangladesh Prime Minister Khaleda Zia in a statement soon after her release called for building a “democratic Bangladesh where all religions are respected.” Earlier, in an exclusive interview with Reuters, Yunus, the head of Bangladesh’s interim government, underscored the importance of capitalizing on the current political shift. “Let us make the best use of our new victory, not let this slip away because of our mistakes,” Yunus said. Nobel laureate Muhammad Yunus was appointed as the head of Bangladesh’s interim government on Tuesday, according to President’s Press Secretary statement. "
  },
  {
    "id":2,
    "title": "PM Modi directed IOA President PT Usha to take necessary action: Sports minister on Vinesh Phogat’s disqualification",
    "context" : "Mandaviya also said that Govt provided every assistance possible to wrestler Vinesh Phogat for her preparations",
    "image" : "../../public/images/card-images/2.jpg",
    "detail" : "Union Sports Minister Mansukh Mandaviya Wednesday said Prime Minister Narendra Modi has directed Indian Olympic Association (IOA) President PT Usha to take necessary action regarding wrestler Vinesh Phogat’s disqualification from Paris Olympics 2024. Addressing the Lok Sabha, Mandaviya said, “IOA president PT Usha directed by PM Modi to take appropriate action. IOA has registered dissent with United World Wrestling regarding this matter.” Phogat was disqualified from the wrestling finals in 50-kg female category in the Paris Olympics 2024 after she weighed 100 gm overweight in the morning. “She was the first Indian woman to reach the finals in female wrestling in the Olympics,” said Mandaviya, adding that the government provided every assistance possible to the wrestler for her preparations. "
  },
  {
    "id":3,
    "title": "Guess what we found in Pune? Some roads without potholes! Here’s how",
    "context" : "These Pune roads, including one that was built in the 1960s, are largely free of potholes. Here’s how they were built and what seems to have worked in their favour",
    "image" : "../../public/images/card-images/3.jpg",
    "detail" : "Gone are the days when roads with potholes made news. Today, roads without potholes are the real headline-grabbers. Team IE set out in different directions to find a few of these in Pune, and after days of scouring the city, we came across a few roads that, believe it or not, did not have any potholes for at least a 1 km stretch. So here are the most newsworthy roads of Pune, roads that have a striking feature that hundreds of their counterparts do not – no potholes. We asked the people who built these roads how they did it and discovered it was not rocket science, just pure and straightforward adherence to road construction principles. Neatly maintained footpaths on both sides, well-kept channels for the passage of water along the roads, proper signages, and above all, not a single pothole. "
  },
  {
    "id":4,
    "title": "John Abraham poses with Manu Bhaker, netizens object to actor holding her bronze medal: ‘You didn’t even know her before Olympics’",
    "context" : "John Abraham posed with Manu Bhaker in a recent photo and the netizens were quite upset that John held Manu's medal while posing with her.",
    "image" : "../../public/images/card-images/4.webp",
    "detail" : "John Abraham, who is presently promoting his upcoming film Vedaa, met Olympic-medal winning shooter Manu Bhaker on Wednesday. Manu won two bronze medals at the ongoing Paris Olympics. After she returned to Delhi, John met her and clicked a picture with her. In the photo, John is holding one of her bronze medals and the netizens were not happy with his gesture. The most liked comment on his post read, “Sorry but u have no rights to touch the medal won by someone else.” Another comment read, “Why are you holding her medal? She earned it you don’t have right too hold it. You didn’t even know her before Olympics.” Another netizen said, “Where were you in her training days? Never bothered to support a budding athlete?” John had shared the photo with the caption, “Had the pleasure of meeting @bhakermanu and her lovely family. "
  },
  {
    "id":5,
    "title": "What is the impact of Ukrainian sanctions on Russian oil flows into the EU?",
    "context" : "Ukraine is taking direct action to limit the flow of Russian oil and gas to Europe, much to the irritation of two EU member states.",
    "image" : "../../public/images/card-images/5.jpg",
    "detail" : "In the two and a half years since Russia’s full-scale invasion of Ukraine, questions around Russian oil and gas coming into the EU have never been far from the headlines. The latest development concerns Ukraine’s decision to put Russian oil company Lukoil on a sanctions list, forcing it to stop delivering pipeline crude oil — via Ukrainian territory — to the few EU countries still receiving it. What’s going on with Lukoil and who is affected? In late June, Ukraine hardened existing sanctions against Lukoil, effectively preventing the company from using Ukraine as a transit country through which to deliver pipeline crude oil to other countries. Hungary, Slovakia and the Czech Republic still receive Russian crude oil through the southern branch of the Druzhba pipeline — which passes through Ukraine — from Lukoil and other suppliers. "
  },
  {
    "id":6,
    "title": "NASA may use SpaceX’s Dragon capsule to bring Sunita Williams, Barry Wilmore back to Earth",
    "context" : "Instead of Boeing's Starliner, two astronauts stuck at ISS might come back to Earth on SpaceX's Dragon capsule.",
    "image" : "../../public/images/card-images/6.jpg",
    "detail" : "Sunita Williams and Barry Wilmore are currently stranded at the International Space Station due to a fault in the Boeing Starliner spacecraft. Although Boeing recently reported that 27 out of 28 thrusters are back to normal condition, NASA remains hesitant to use Starliner for the astronauts’ return, as the root cause of the faults remains unidentified and could pose a threat, reported CNBC. In a potential solution, NASA is considering using SpaceX’s Dragon capsule, a proven Commercial Crew Program (CCP) spacecraft, to bring both astronauts safely back to Earth. The Crew-9 mission with SpaceX’s Dragon capsule was initially set for August 18 but has been postponed to no earlier than September 24, as confirmed by NASA on August 6. Reports indicated that NASA might send only two astronauts on the Crew-9 mission, allowing Williams and Wilmore to return with them, according to CNBC. "
  },
  {
    "id":7,
    "title": "X faces legal action in EU for processing user data to train its AI chatbot Grok",
    "context" : "Data protection authorities in Ireland said that X has violated provisions of the EU’s GDPR.",
    "image" : "../../public/images/card-images/7.jpg",
    "detail" : "Elon Musk’s X is being prosecuted by EU regulators after it trained its AI models using posts and other data belonging to account holders without obtaining their consent. The decision by Ireland’s Data Protection Commission (DPC) to initiate legal proceedings against X comes following reports that all the users on the platform were automatically signed up to allow their data to be processed to train the AI chatbot ‘Grok’. Users have to click on Settings and uncheck the box in order to opt-out of the AI training process. Concerned by the default processing of user posts for AI training, the data protection watchdog said that it is seeking an injunction against X as the move threatens the rights and freedoms of users on the social media platform."
  },
  ];

function Loading(){
    return(
        <>
        <div className="w-auto justify-center text-center"><h2>Fetching Data</h2><span className="loading loading-infinity loading-lg justify-center h-10"></span></div>
            
        </>
    )
}

export const HeroSection = () => {
  const [data, setData] = useState(false);
    console.log(General);
    setTimeout(() => {
        setData(true)
    }, 5000);
  
    
  
  return (
    <>
    <div className="divider divider-info">Latest News</div>
    {data ? newsFeed.map((cardData,i)=>(
        <div className="card bg-base-100 w-auto  shadow-xl  my-5 sm:mx-10" key={i}>
        <div className="card-body py-3">
          <h2 className="card-title font-bold">{cardData.title}</h2>
          <p className="text-xs sm:text-sm">{cardData.context}</p>
        </div>
        <div className="flex flex-column">
        <figure>
          <img className="px-8"
            src={cardData.image}
            alt="Shoes"
          />
        </figure>
        </div>
        <p className="text-justify px-8 py-2 pb-6 text-xs sm:text-sm">{cardData.detail}</p>
        <hr className="h-px bg-gray-900 border-0 dark:bg-gray-900"/>       
      </div>
      
    )): <Loading/>}


      
      
    </>
  );
};
