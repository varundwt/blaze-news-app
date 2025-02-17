import { useState, useEffect } from "react";

const newsFeed = [
  {
    id: 1,
    title:
      "Bangladesh Crisis Live Updates: Interim govt, headed by Nobel laureate Muhammad Yunus, to take oath tomorrow, says army chief",
    context:
      "Bangladesh Crisis Live Updates: India plans to host ousted Bangladesh Prime Minister Sheikh Hasina.",
    image:
      "https://c.ndtvimg.com/2024-08/ufejn73_bangladesh-protest-afp_625x300_07_August_24.jpeg",
    detail:
      "Bangladesh Crisis Live Updates: Bangladesh Army Chief General Waker-Uz-Zaman in a statement on Wednesday said that interim government, headed by Nobel laureate Prof Muhammad Yunus, will take oath on Thursday. Former Bangladesh Prime Minister Khaleda Zia in a statement soon after her release called for building a “democratic Bangladesh where all religions are respected.” Earlier, in an exclusive interview with Reuters, Yunus, the head of Bangladesh’s interim government, underscored the importance of capitalizing on the current political shift. “Let us make the best use of our new victory, not let this slip away because of our mistakes,” Yunus said. Nobel laureate Muhammad Yunus was appointed as the head of Bangladesh’s interim government on Tuesday, according to President’s Press Secretary statement. ",
  },
  {
    id: 2,
    title:
      "PM Modi directed IOA President PT Usha to take necessary action: Sports minister on Vinesh Phogat’s disqualification",
    context:
      "Mandaviya also said that Govt provided every assistance possible to wrestler Vinesh Phogat for her preparations",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/misc/2024-07/29/full/20240729035L.jpg?im=FeatureCrop,size=(826,465)",
    detail:
      "Union Sports Minister Mansukh Mandaviya Wednesday said Prime Minister Narendra Modi has directed Indian Olympic Association (IOA) President PT Usha to take necessary action regarding wrestler Vinesh Phogat’s disqualification from Paris Olympics 2024. Addressing the Lok Sabha, Mandaviya said, “IOA president PT Usha directed by PM Modi to take appropriate action. IOA has registered dissent with United World Wrestling regarding this matter.” Phogat was disqualified from the wrestling finals in 50-kg female category in the Paris Olympics 2024 after she weighed 100 gm overweight in the morning. “She was the first Indian woman to reach the finals in female wrestling in the Olympics,” said Mandaviya, adding that the government provided every assistance possible to the wrestler for her preparations. ",
  },
  {
    id: 3,
    title:
      "Guess what we found in Pune? Some roads without potholes! Here’s how",
    context:
      "These Pune roads, including one that was built in the 1960s, are largely free of potholes. Here’s how they were built and what seems to have worked in their favour",
    image:
      "https://indianexpress.com/wp-content/uploads/2024/08/Untitled-design-55-2.jpg",
    detail:
      "Gone are the days when roads with potholes made news. Today, roads without potholes are the real headline-grabbers. Team IE set out in different directions to find a few of these in Pune, and after days of scouring the city, we came across a few roads that, believe it or not, did not have any potholes for at least a 1 km stretch. So here are the most newsworthy roads of Pune, roads that have a striking feature that hundreds of their counterparts do not – no potholes. We asked the people who built these roads how they did it and discovered it was not rocket science, just pure and straightforward adherence to road construction principles. Neatly maintained footpaths on both sides, well-kept channels for the passage of water along the roads, proper signages, and above all, not a single pothole. ",
  },
  {
    id: 4,
    title:
      "John Abraham poses with Manu Bhaker, netizens object to actor holding her bronze medal: ‘You didn’t even know her before Olympics’",
    context:
      "John Abraham posed with Manu Bhaker in a recent photo and the netizens were quite upset that John held Manu's medal while posing with her.",
    image:
      "https://images.indianexpress.com/2024/08/john-abraham-manu-bhaker.jpg?w=640",
    detail:
      "John Abraham, who is presently promoting his upcoming film Vedaa, met Olympic-medal winning shooter Manu Bhaker on Wednesday. Manu won two bronze medals at the ongoing Paris Olympics. After she returned to Delhi, John met her and clicked a picture with her. In the photo, John is holding one of her bronze medals and the netizens were not happy with his gesture. The most liked comment on his post read, “Sorry but u have no rights to touch the medal won by someone else.” Another comment read, “Why are you holding her medal? She earned it you don’t have right too hold it. You didn’t even know her before Olympics.” Another netizen said, “Where were you in her training days? Never bothered to support a budding athlete?” John had shared the photo with the caption, “Had the pleasure of meeting @bhakermanu and her lovely family. ",
  },
  {
    id: 5,
    title:
      "What is the impact of Ukrainian sanctions on Russian oil flows into the EU?",
    context:
      "Ukraine is taking direct action to limit the flow of Russian oil and gas to Europe, much to the irritation of two EU member states.",
    image: "https://images.indianexpress.com/2024/08/Lukoil.jpg?w=640",
    detail:
      "In the two and a half years since Russia’s full-scale invasion of Ukraine, questions around Russian oil and gas coming into the EU have never been far from the headlines. The latest development concerns Ukraine’s decision to put Russian oil company Lukoil on a sanctions list, forcing it to stop delivering pipeline crude oil — via Ukrainian territory — to the few EU countries still receiving it. What’s going on with Lukoil and who is affected? In late June, Ukraine hardened existing sanctions against Lukoil, effectively preventing the company from using Ukraine as a transit country through which to deliver pipeline crude oil to other countries. Hungary, Slovakia and the Czech Republic still receive Russian crude oil through the southern branch of the Druzhba pipeline — which passes through Ukraine — from Lukoil and other suppliers. ",
  },
  {
    id: 6,
    title:
      "NASA may use SpaceX’s Dragon capsule to bring Sunita Williams, Barry Wilmore back to Earth",
    context:
      "Instead of Boeing's Starliner, two astronauts stuck at ISS might come back to Earth on SpaceX's Dragon capsule.",
    image: "https://images.indianexpress.com/2024/08/SW.png?w=1024",
    detail:
      "Sunita Williams and Barry Wilmore are currently stranded at the International Space Station due to a fault in the Boeing Starliner spacecraft. Although Boeing recently reported that 27 out of 28 thrusters are back to normal condition, NASA remains hesitant to use Starliner for the astronauts’ return, as the root cause of the faults remains unidentified and could pose a threat, reported CNBC. In a potential solution, NASA is considering using SpaceX’s Dragon capsule, a proven Commercial Crew Program (CCP) spacecraft, to bring both astronauts safely back to Earth. The Crew-9 mission with SpaceX’s Dragon capsule was initially set for August 18 but has been postponed to no earlier than September 24, as confirmed by NASA on August 6. Reports indicated that NASA might send only two astronauts on the Crew-9 mission, allowing Williams and Wilmore to return with them, according to CNBC. ",
  },
  {
    id: 7,
    title:
      "X faces legal action in EU for processing user data to train its AI chatbot Grok",
    context:
      "Data protection authorities in Ireland said that X has violated provisions of the EU’s GDPR.",
    image: "https://images.indianexpress.com/2024/04/Elon-Musk-File.jpg?w=640",
    detail:
      "Elon Musk’s X is being prosecuted by EU regulators after it trained its AI models using posts and other data belonging to account holders without obtaining their consent. The decision by Ireland’s Data Protection Commission (DPC) to initiate legal proceedings against X comes following reports that all the users on the platform were automatically signed up to allow their data to be processed to train the AI chatbot ‘Grok’. Users have to click on Settings and uncheck the box in order to opt-out of the AI training process. Concerned by the default processing of user posts for AI training, the data protection watchdog said that it is seeking an injunction against X as the move threatens the rights and freedoms of users on the social media platform.",
  },
];

const health = [
  {
    id: 1,
    title:
      "Breakthrough Gene Therapy Cures Major Genetic Disorders: Era of Personalized Medicine Dawns",
    dropdown:
      "Scientists successfully employ CRISPR-Cas9 gene editing to treat multiple genetic diseases, marking a turning point in healthcare. Personalized treatment plans based on individual genetic makeup become the norm, leading to more effective and targeted therapies.",
  },
  {
    id: 2,
    title:
      "Global Surge in Mental Health Crisis Prompts Urgent Call for Increased Support",
    dropdown:
      "Rising rates of anxiety, depression, and other mental health conditions strain healthcare systems worldwide. Governments and organizations invest heavily in mental health resources, including prevention, treatment, and support services.",
  },
  {
    id: 3,
    title:
      "Antibiotic Resistance Reaches Critical Level: Scientists Race Against Time to Develop New Treatments",
    dropdown:
      "Superbugs become increasingly resistant to antibiotics, posing a serious threat to public health. Researchers explore alternative therapies like phage therapy and develop innovative antibiotics to combat the crisis.",
  },
  {
    id: 4,
    title:
      "Plant-Based Diets Proven to Reverse Chronic Diseases: Dietary Guidelines Under Review",
    dropdown:
      "Large-scale studies demonstrate the efficacy of plant-based diets in preventing and reversing conditions like heart disease and diabetes. Health organizations worldwide update dietary recommendations to emphasize the benefits of plant-based nutrition.",
  },
];

const technology = [
  {
    id: 1,
    image:
      "https://images.indianexpress.com/2024/08/motorola-edge-50-review.jpg?w=640",
    title:
      "Motorola Edge 50 made me realise flagship smartphone experience need not cost a lot",
    description:
      "Motorola Edge 50 is one of the most unique smartphones in this price range, with an emphasis on practicality rather than sheer performance.",
  },
  {
    id: 2,
    image:
      "https://images.indianexpress.com/2024/08/Tech-feature-images25.jpg?w=640",
    title: "Cisco Systems to cut about 7% of staff in second round of layoffs",
    description:
      "Like other big tech companies, Cisco has raced to take advantage of an industry-wide shift into artificial intelligence.",
  },
  {
    id: 3,
    image:
      "https://images.indianexpress.com/2024/08/WhatsApp-Express-Photo-3-1_caddfb.jpeg?w=640",
    title:
      "WhatsApp gets GIPHY integration, brings ‘Custom Sticker Maker’ to Android",
    description:
      "WhatsApp`s Custom Sticker Maker tool, which has previously exclusive to Apple devices is now available on Android.",
  },
];

const trending = [
  {
    id: 1,
    image:
      "https://images.indianexpress.com/2024/08/ch1154405.jpg?w=640",
    title:
      "As Uttarakhand political winds indicate a shift, tight contest on the cards for Kedarnath Assembly seat",
    description:
      "Since the state was created, the BJP has won the seat thrice and the Congress twice. In the bypoll, necessitated by the death of BJP’s sitting MLA, temples and religious tourism are expected to be the key issues",
  },
  {
    id: 2,
    image:
      "https://images.indianexpress.com/2024/08/modi-31-1.jpg?w=640",
    title: "Has BJP ‘aged’? As perked Opposition projects youth, new faces, party hopes to shed years",
    description:
      "While little separates leaders on the two sides in terms of actual years, Congress has an edge in perception; BJP says its rival’s new line-up a factor of compulsion rather than choice",
  },
  {
    id: 3,
    image:
      "https://images.indianexpress.com/2024/08/collage_622f76.jpg?w=640",
    title:
      "Punjab questions Centre ‘warning’ to scrap road projects over ‘law, order’, says ‘just listen to the farmers’",
    description:
      "As Oppn seizes this to attack Mann govt, AAP points to NCRB data to refute law, order claims in letter from Union minister Nitin Gadkari, says problems localised",
  },
];

function Loading() {
  return (
    <>
      <div className="w-full h-screen p-36 justify-center text-center">
        <h2 className=" ">Fetching Data</h2>
        <span className="loading loading-infinity loading-lg justify-center h-10"></span>
      </div>
    </>
  );
}

const hindiNews = [
      {
        "uuid": "ac282ff8-d4a3-4449-929e-7cf1f953bc75",
        "title": "मर्दों की तुलना में औरतों का रात में बाहर निकलना कितना आसान?",
        "description": "कोलकाता में महिला डॉक्टर के रेप और हत्या के बाद महिलाओं की आज?...",
        "keywords": "",
        "snippet": "मर्दों की तुलना में औरतों का रात में बाहर निकलना कितना आसान? - ?...",
        "url": "https://www.bbc.com/hindi/articles/c5ydp9qd0q7o",
        "image_url": "https://ichef.bbci.co.uk/news/1024/branded_hindi/50ea/live/7b484130-5bf6-11ef-bc21-35ec0cfc9e20.jpg",
        "language": "hi",
        "published_at": "2024-08-17T02:38:54.000000Z",
        "source": "bbchindi.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "e2cc862d-9171-4400-a705-7ef050643dbb",
        "title": "हरियाणा विधानसभा चुनाव: बीजेपी-जेजेपी गठबंधन की टूट से लेकर कांग्रेस की 'चार्जशीट' तक",
        "description": "हरियाणा में पिछला विधानसभा चुनाव अक्टूबर 2019 में हुआ था. उस वक़...",
        "keywords": "",
        "snippet": "हरियाणा विधानसभा चुनाव: बीजेपी-जेजेपी गठबंधन की टूट से लेकर ?...",
        "url": "https://www.bbc.com/hindi/articles/cy9evypn4p8o",
        "image_url": "https://ichef.bbci.co.uk/news/1024/branded_hindi/1ea6/live/9ce9fb00-5bdb-11ef-8c32-f3c2bc7494c6.jpg",
        "language": "hi",
        "published_at": "2024-08-17T01:42:20.000000Z",
        "source": "bbchindi.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      },
      {
        "uuid": "39fe3a37-b589-4289-ad02-8ec9b6ed149b",
        "title": "कानपुर के पास साबरमती एक्सप्रेस पटरी से उतरी, सभी यात्री सुरक्षित, रेलवे ने जारी किया हेल्पलाइन नंबर",
        "description": "Sabarmati Express Derail: कानपुर और भीमसेन स्टेशन के बीच ब्लॉक सेक्शन में सा?...",
        "keywords": "Sabarmati Express derails, साबरमती एक्सप्रेस पटरी से उतरी, Train derailed, Kanpur rail accident, railway accident, railway helpline number, ट्रेन पटरी से उतरी, कानपुर रेल हादसा, रेल हादस, रेलवे हेल्पलाइन नंबर",
        "snippet": "वाराणसी से अहमदाबाद जा रही साबरमती एक्सप्रेस (19168) देर रात करी?...",
        "url": "https://ndtv.in/india/train-accident-sabarmati-express-derails-in-kanpur-all-passengers-safe-railways-releases-helpline-number-6354899#publisher=newsstand",
        "image_url": "https://c.ndtvimg.com/2024-08/bpn15gb8_train_625x300_17_August_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
        "language": "hi",
        "published_at": "2024-08-17T01:26:26.000000Z",
        "source": "ndtv.com",
        "categories": [
          "general"
        ],
        "relevance_score": null
      }
    ]
  

export const HeroSection = () => {
  const [data, setData] = useState(false);
  const [latestNews, setLatestNews] = useState();

  async function handleHindiNews() {
    const newsData = await fetch("https://inshortsapi.vercel.app/news?category=all");
    const newsDataJSON = await newsData.json();
    setLatestNews(newsDataJSON.data);
    console.log(latestNews);          
  }
  useEffect(()=>{
    handleHindiNews();
  },[])

  setTimeout(() => {
    setData(true);
  }, 4000);

  return (
    <>
      <div className="divider divider-info">Latest News</div>
      {data ? (
        <div className=" flex flex-col lg:flex-row">
          <div>          
          
          {latestNews.map((cardData, i) => (
              <>
                <div
                  className="card bg-base-100 w-auto shadow-xl my-5 sm:mx-10"
                  key={i}
                >
                  <div className="card-body py-3">
                    <h2 className="card-title font-bold sm:text-3xl">
                      {cardData.title}
                    </h2>
                    <p className="text-xs italic sm:text-sm">
                      {cardData.date} | {cardData.time}
                    </p>
                  </div>
                  <div className="flex flex-column">
                    <figure>
                      <img className="px-8 w-screen md:w-screen" src={cardData.imageUrl} alt="card-image" />
                    </figure>
                  </div>
                  <p className="text-justify px-8 py-2 pb-6 text-xs sm:text-sm">
                    {cardData.content} &nbsp;&nbsp;<a className="text-blue-600 italic" href={cardData.readMoreUrl}>Read More...</a>
                  </p>
                  <hr className="h-px bg-gray-900 border-0 dark:bg-gray-900" />
                </div>
              </>
            ))
            }
            {newsFeed.map((cardData, i) => (
              <>
                <div
                  className="card bg-base-100 w-auto  shadow-xl  my-5 sm:mx-10"
                  key={i}
                >
                  <div className="card-body py-3">
                    <h2 className="card-title font-bold sm:text-3xl">
                      {cardData.title}
                    </h2>
                    <p className="text-xs italic sm:text-sm">
                      {cardData.context}
                    </p>
                  </div>
                  <div className="flex flex-column">
                    <figure>
                      <img className="px-8 md:w-screen" src={cardData.image} alt="Shoes" />
                    </figure>
                  </div>
                  <p className="text-justify px-8 py-2 pb-6 text-xs sm:text-sm">
                    {cardData.detail}
                  </p>
                  <hr className="h-px bg-gray-900 border-0 dark:bg-gray-900" />
                </div>
              </>
            ))}
          </div>
          <div>
            <div>            
            <div className="divider divider-info mt-8">Hindi News</div>
              {data &&
                hindiNews.map((item, i) => (
                  <>
                    <div
                      className="card card-compact bg-slate-900 lg:w-96 shadow-xl w-50 my-10 border rounded-xl m-5 py-8 lg:py-4 border-blue-600"
                      id={i}
                    >
                      <figure className="lg:px-4 px-8">
                        <img src={item.image_url} alt="card-image" />
                      </figure>
                      <div className="card-body px-4">
                        <h2 className="card-title px-4 lg:px-0">{item.title}</h2>
                        <p className="px-4 lg:px-0">{item.description}&nbsp;&nbsp;<a className="text-blue-600 italic" href={item.url}>Read More...</a></p>
                      </div>
                    </div>
                  </>
                ))}
              <div className="divider divider-info mt-8">Politics</div>
              {data &&
                trending.map((item, i) => (
                  <>
                    <div
                      className="card card-compact bg-slate-900 lg:w-96 shadow-xl w-50 my-10 border rounded-xl m-5 py-8 lg:py-4 border-blue-600"
                      id={i}
                    >
                      <figure className="lg:px-4 px-8">
                        <img src={item.image} alt="card-image" />
                      </figure>
                      <div className="card-body px-4">
                        <h2 className="card-title px-4 lg:px-0">{item.title}</h2>
                        <p className="px-4 lg:px-0">{item.description}</p>
                      </div>
                    </div>
                  </>
                ))}
                <div className="divider divider-info mt-8">Technology</div>
                {data &&
                technology.map((item, i) => (
                  <>
                    <div
                      className="card card-compact bg-slate-900 lg:w-96 shadow-xl w-50 my-10 border rounded-xl m-5 py-8 lg:py-4 border-blue-600"
                      id={i}
                    >
                      <figure className="lg:px-4 px-8">
                        <img src={item.image} alt="card-image" />
                      </figure>
                      <div className="card-body px-4">
                        <h2 className="card-title px-4 lg:px-0">{item.title}</h2>
                        <p className="px-4 lg:px-0">{item.description}</p>
                      </div>
                    </div>
                  </>
                ))}
              {data && <div className="divider divider-info mt-8">Health</div>}
              <div className="mx-8 lg:py-1 lg:mx-43">
                {data &&
                  health.map((item, i) => (
                    <>
                      <div
                        className="bg-blue-500 collapse rounded-lg my-2"
                        key={i}
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-base text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content lg:w-80 font-semibold italic">
                          {item.title}
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                          <p className="text-xs">{item.dropdown}</p>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
