import React from "react";

// props -> src,title,subtitle,isdark
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className=" h-80">
          <img src={props.src} alt={props.title}  className="w-full h-full rounded-xl"/>
        </div>
        <h3
          className={`text-bold text-lg ${
            props.isDark ? "text-white " : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};

export default Poster;
