import React , {useState ,useEffect} from "react";
import axios from "axios";
import EntertainmaentCardSlider from "../Enternainment/Entertaimant.card.Component";
import { Premier } from "../Premier/Premier.Component";
import PosterSlider from "../Posterslider/PosterSlider.Component";
import { TempPosters } from "../../config/Tempposter.config";




const  HomePage = () => {
     
  const [popularMovies , setPopularMovies] = useState([])
  useEffect (() =>{
    const requestPopularmovies =  async () =>{
      const getpopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getpopularMovies.data.results);    
    }
    requestPopularmovies();
  } ,[]  )
 
      console.log(popularMovies);

    return (
        <>
           <div className="flex flex-col gap-10 ">
           <div className="container mx-auto px-6" >
            <h1 className="text-2xl font-bold text-gray-800 "> 
              The Best of Entertainment
             </h1>
             <EntertainmaentCardSlider/>
           </div>


           <div className="bg-mammu-200 py-16">
      
          <div className="container mx-auto px-10 flex flex-col gap-3" >
          <div className="flex ">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay" 
          className="w-full h-full px-4" />


        </div>
        
          <PosterSlider images={ popularMovies} title="Preimier" subtitle="Brand new movies at home every Friday"  isDark= {true} />

          </div>

           </div>
           </div>

           <div className="container mx-auto px-10">
          <PosterSlider images ={ popularMovies}   title="Online Streaming event"  />

           </div>
        
        </>
    )



}

export default HomePage ;