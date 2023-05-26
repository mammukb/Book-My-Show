//Tranform one component to another component
// Adding additional functionality to the component

import React from "react";
import DefaultLayout from "../Layouts/Default.Layout";
import { Route, Routes } from "react-router-dom";

function DefaultHOC({component: Component, ...rest }) {
  return (
    <>
     
      <Routes>
    
        <Route
          {...rest}
          Component ={ (props) => ( 
            <DefaultLayout>
              
              <Component {...props} />
            </DefaultLayout>
            )
          }
        />
      </Routes>
    </>
  );
}

export default DefaultHOC;
