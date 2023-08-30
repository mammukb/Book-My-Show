//Tranform one component to another component
// Adding additional functionality to the component

import React from "react";
import MovieLayout from "../Layouts/Movie.Layout";
import { Route, Routes } from "react-router-dom";

function MovieHOC({component: Component, ...rest }) {
  return (
    <>
     
      <Routes>
    
        <Route
          {...rest}
          Component ={ (props) => ( 
            <MovieLayout>
              
              <Component {...props} />
            </MovieLayout>
            )
          }
        />
      </Routes>
    </>
  );
}

export default MovieHOC;