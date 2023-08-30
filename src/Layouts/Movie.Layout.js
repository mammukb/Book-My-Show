import React from 'react'
import Navbar from "../Components/Navbar/Navbar.Component"
import MovieNavbar from '../Components/Navbar/MovieNavbar.Component'


function MovieLayout (props) {
  return (
    <>
   <MovieNavbar/>
  
    {props.children}
    
    </>
  )
}

export default MovieLayout
