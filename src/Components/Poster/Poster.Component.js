import React from "react";

// props -> src,title,subtitle,isdark
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col    gap-2 px-3   ">
        <div className=" h-80 ">
          <img
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-xl"
          />
        </div>
        <h3
          className={`   font-bold text-lg ${
            props.isDark ? "text-white " : "text-gray-800"
          }`}
        >
          {props.original_title}
        </h3>
        <p
          className={`font-bold text-lg ${
            props.isDark ? "text-white " : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
