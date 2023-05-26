import React from "react";
import EntertainmaentCardSlider from "../Enternainment/Entertaimant.card.Component";
import { Premier } from "../Premier/Premier.Component";

const  HomePage = () => {
    return (
        <>
           <div className="container mx-auto px-4" >
            <h1 className="text-2xl font-bold text-gray-800 "> 
              The Best of Entertainment
             </h1>
             <EntertainmaentCardSlider/>
             <Premier/>
           </div>
        
        </>
    )



}

export default HomePage ;