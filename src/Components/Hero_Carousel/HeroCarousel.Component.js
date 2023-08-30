import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


// Component
   import { NextArrow ,PrevArrow} from "./Arrow.Component";
   import Heroslider from "react-slick";
import {GrFormPrevious } from "react-icons/gr"



const HeroCarousel = () => {

   const [images , setImages] = useState([]);

   useEffect( () => {
    const requestNowPlaying = async() => {
        const getImages = await axios.get("/movie/now_playing");
        console.log(getImages);
        setImages(getImages.data.results);
    }
        requestNowPlaying();
      
   } , []  );

const settingsLg =  {
  arrows: true,
  autoplay: true,
  centerMode: true,
  slidesToShow : 1 ,
  slidesToScroll : 1,
  infinite : true,
  centerPadding : "300px",
  nextArrow : <NextArrow  />,
  prevArrow : <PrevArrow/>                   

}
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <NextArrow  />,
    prevArrow : <PrevArrow />
  };
 

  return (
    <>
    <div className="lg:hidden"   >
    <Heroslider {...settings}>
        {
        images.map((image) => {
            return(
            <div className="w-full h-64 md:80 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}  alt="slider"  className="w-full h-full rounded-md"/>
          </div>);
          
        })
        
        }
       
      </Heroslider>

    </div>
    <div className="hidden lg:block">
    <Heroslider {...settingsLg}>
        {
        images.map((image) => {
            return(
            <div className="w-full h-96 px-2 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}  alt="slider"  className="w-full h-full rounded-md"/>
          </div>);
          
        })
        
        }
       
      </Heroslider>

    </div>







     
    </>
  );
};

export default HeroCarousel;