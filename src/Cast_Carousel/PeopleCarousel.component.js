import React from "react";
import settings from "../config/Poster.carousal.config";

import Slider from "react-slick";

const peopleCarousal = () => {
    const  char=[
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tovino-thomas-37628-25-07-2018-06-42-03.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kunchacko-boban-17629-24-03-2017-12-39-45.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/asif-ali-13839-1658319936.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vineeth-sreenivasan-5759-24-03-2017-12-55-17.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aparna-balamurali-1064392-1671107921.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tovino-thomas-37628-25-07-2018-06-42-03.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kunchacko-boban-17629-24-03-2017-12-39-45.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/asif-ali-13839-1658319936.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vineeth-sreenivasan-5759-24-03-2017-12-55-17.jpg",
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aparna-balamurali-1064392-1671107921.jpg"
    ]
  return (

    <>

    
      <Slider   { ...settings} >
        {char.map((img) => {
          return (
            <div className="p-3 ">
              <img
               src={img}
                alt="Character"
            className="rounded-full "
               />
              <h1 className="text-gray-800 font-bold text-center mt-2">Hero </h1>
              <h5 className="text-gray-400 text-center "> as Character</h5>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default peopleCarousal;
