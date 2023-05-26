import React from "react";
import Heroslider from "react-slick";
import {GrFormPrevious } from "react-icons/gr"


// Component
   import { NextArrow ,PrevArrow} from "./Arrow.Component";



const HeroCarousel = () => {
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
  const images = [
    "https://images.unsplash.com/photo-1684577088722-d46fd87aaa09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    "https://images.unsplash.com/photo-1683151671047-8c6b4ea30320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1684135407084-3f2e019f390d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1684508405245-3d3dac130dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=433&q=80",
    "https://images.unsplash.com/photo-1684523952971-4d86507b5155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];

  return (
    <>
    <div className="lg:hidden"   >
    <Heroslider {...settings}>
        {
        images.map((image) => {
            return(
            <div className="w-full h-64 md:80 py-3">
            <img src={image}  alt="slider"  className="w-full h-full rounded-md"/>
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
            <img src={image}  alt="slider"  className="w-full h-full rounded-md"/>
          </div>);
          
        })
        
        }
       
      </Heroslider>

    </div>







     
    </>
  );
};

export default HeroCarousel;