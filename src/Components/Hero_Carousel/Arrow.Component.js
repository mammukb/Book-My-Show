import React from "react";


export const NextArrow = (props) => {
    return (
        <>
      <div 
      className= {props.className}
      style={ { ...props.style ,  backgroundColor:"#00000066",
       
    
    
    }  }
      onClick={props.onClick}
            
            />

        </>
    )

}

export const PrevArrow = (props) => {
    return (
        <>
      <div 
      className= {props.className }
      style={ { ...props.style ,  backgroundColor:"#00000066",
      
    
    
    
    }  }
      onClick={props.onClick}
            
            />

        </>
    )

}