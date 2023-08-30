import React from "react";
import { HiChevronRight ,HiChevronLeft } from "react-icons/hi";
import { BiSearch,BiMenu,BiShareAlt } from "react-icons/bi";



const Navsm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">It All Starts Here!</h3>
         
        </div>
        <div className="w-6 h-6 ">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};



const Navlg = () => {
  return (
    <>
      <div className="container mx-auto px-4  py-1 flex items-center justify-evenly">
        <div className="flex items-center w-1/2 ">
          <div className="w-20 h-12">
            <img
              src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center bg-white gap-3 p-1 rounded-sm">
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none "
              placeholder="Search for Movies,Events,Plays,sports And Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-xs flex items-center hover:text-white hover:cursor-pointer">
            {" "}
            Kochi <HiChevronRight />{" "}
          </span>

          <button className="bg-red-400 rounded text-white text-sm px-2 py-1">
                     Sign in
          </button>
          <div className="w-8 h-8  text-white">
            <BiMenu className="w-full h-full"/>
          </div>




        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className= "absolute inset-x-0  z-30  bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative  bg-NavCol-700 px-4 py-2">
        <div className="md:hidden ">
          {" "}
          {/*Mobile View*/} <Navsm />{" "}
        </div>
        <div className=" hidden  lg:hidden md:block ">
          {" "}
          {/* Tablet View */} <Navsm />{" "}
        </div>
        <div className="hidden lg:flex ">
          {/* Desktop view */} <Navlg />{" "}
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
