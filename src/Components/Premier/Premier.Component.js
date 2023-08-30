import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";
import settings from "../../config/Poster.carousal.config";
import { TempPosters } from "../../config/Tempposter.config";

  export  const Premier = () => {      
    return(
        <>
            <div className="flex flex-col items-start  py-4 px-4 ">
                <h3 className="text-white text-xl font-bold">Premiers</h3>
                <p className="text-white text-sm ">brand new release every Friday</p>
            </div>


        <Slider { ...settings}>
      {
        TempPosters.map((image) => (
      
 <Poster { ...image}  isDark  />

        ))
      }

        </Slider>
        </>
    )
}