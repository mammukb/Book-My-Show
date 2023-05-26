import React from 'react'
import Navbar from "../Components/Navbar/Navbar.Component"
import HeroCarousel from '../Components/Hero_Carousel/HeroCarousel.Component'

function DefaultLayout(props) {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    {props.children}
    
    </>
  )
}

export default DefaultLayout
