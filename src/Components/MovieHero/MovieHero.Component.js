import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import {SlShare} from "react-icons/sl"

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_dVimZYhEq6M99A",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden ">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/2018-et00357072-1681718285.jpg"
          alt="Poster"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/2018-et00357072-1681718285.jpg"
          alt="Poster"
        />
      </div>

      <div className=" relative  hidden lg:block " style={{ height: "40rem" }}>
        <div
          className="absolute h-full w-full z-10"
          style={{
            height: "40rem",
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />
        <div className="absolute z-30  left-60 top-12  flex flex-row">
          <div className=" w-64 h-auto  ">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/2018-et00357072-1681718285.jpg"
              alt="TrailerPoster"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="px-8 mt-6  ">
            <h1 className="text-white font-bold text-4xl"> 2018 (Malayalam)</h1>

            <div className="py-8 flex items-end ">
              <span className="text-pink-600 text-4xl ">
                <AiFillStar />
              </span>
              <span className="text-white text-3xl font-semibold ms-2">
                9.3/10
              </span>
              <span className="text-white text-lg ms-2 ">37.7K Votes </span>
              <FiChevronRight className="text-white mb-1" />
            </div>
            <div className="bg-mammu-100 py-3 px-4 flex flex-row items-center rounded-md ">
              <div>
                <h6 className="text-white font-semibold text-lg">
                  Add your rating & review
                </h6>
                <h5 className="text-gray-300">Your rating matter</h5>
              </div>
              <button className="ms-10 bg-white text-gray-950 rounded-md p-2 text-lg font-semibold">
                Rate now
              </button>
            </div>

            <div className="flex flex-row mt-6 gap-2 font-normal">
              <span className="bg-white rounded-sm p-1 cursor-pointer hover:underline">
                2D
              </span>
              <span className="bg-white  p-1 rounded-sm hover:underline cursor-pointer">
                Malayalam
              </span>
            </div>

            <div className="text-white flex flex-row items-center mt-4 font-medium">
              <span> 2h 30m </span>
              <BsDot className="text-xl" />
              <span className="hover:underline  cursor-pointer">
                {" "}
                Drama
              </span>, <span className="hover:underline">Thriller</span>
              <BsDot className="text-xl" />
              <span> UA </span>
              <BsDot className="text-xl" />
              <span> 5 May,2023 </span>
            </div>
            <button   onClick={launchRazorPay} className=" mt-8   bg-mammu-50 text-white px-14 py-3 rounded-md">
              Book tickets
            </button>
          </div>
          <div className=" relative">
            <div className=" absolute top-0 left-72   rounded-md cursor-pointer text-white flex flex-row items-center gap-3 font-semibold bg-mammu-300 p-3 opacity-80" ><SlShare/>  <span >Share</span></div>
          </div>
        </div>

        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/2018-et00357072-1681718285.jpg"
          alt="Poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
