import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
  
      <div className="banner-backgroud crazy-animation ">
        <div className="nav-design banner-inner-text ">
            <h5 className="md:text-2xl text-lime-800 slow-animation">NEW ARRIVALS</h5>
            <h2 className="md:text-5xl">GALAXY <span className="text-amber-400 font-bold    ">ROBO</span> TOYS</h2>
            <button className="btn btn-error mt-10 text-orange-400-200">VIEW NEW TOYS</button>
        </div>
      </div>
  );
};

export default Banner;
