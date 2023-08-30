import React from "react";
import MovieHero from "../MovieHero/MovieHero.Component";
import { BiCameraMovie } from "react-icons/bi";
import PeopleCarousal from "../../Cast_Carousel/PeopleCarousel.component";


 
function MoviePage() {
  return (


    <>
      <MovieHero />
      <div className="my-12 container mx-auto px-10  lg:w-1/2 lg:ml-64  ">
        <div className="flex gap-3 flex-col">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>
            A thriller set against the backdrop of the 2018 Kerala floods It
            unfolds the lives of people from all walks of life who faced
            catastrophic consequences and the collective efforts put in by the
            brave people to survive the calamity.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl">
            Top offers for you
          </h1>
          <div className="flex items-center gap-2 mt-5 bg-yellow-100 border-2 border-yellow-400 border-dashed rounded-md p-3 w-96">
            <BiCameraMovie className="w-8 h-8" />
            <div className="flex flex-col items-start">
              <h3 className="text-gray-800 text-xl">Use Code ZHZB </h3>
              <p className="text-gray-400">Tap to view details</p>
            </div>
          </div>

         
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div>
     <h1 className="font-bold text-gray-900 text-2xl mt-5 mb-3">
           Cast
          </h1>
          <PeopleCarousal  />
         
     </div>
     <div className="my-8">
          <hr />
        </div>
     <div>
     <h1 className="font-bold text-gray-900 text-2xl mt-10 mb-3">
           Crew
          </h1>
          <PeopleCarousal  />
         
     </div>
      </div>

     

   
    </>
  );
}

export default MoviePage;
