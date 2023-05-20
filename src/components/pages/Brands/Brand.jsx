import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCards, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Brand.css'
// import required modules


const Brand = () => {

    const [brands,setBrands] = useState([])
    useEffect(()=>{
        fetch('https://toy-galaxy-assignment-11-server.vercel.app/brands')
        .then(res=>res.json())
        .then(data=>{
            setBrands(data)
        })
    },[])

    console.log();
  return (
    <div className="my-5">
        <h2 className="text-center md:text-5xl my-6 nav-design">Our <span className="text-orange-500">ROBO</span> Brands</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        autoplay={{
          delay: 1000, // 3 seconds delay between each slide
          disableOnInteraction: false, // Autoplay will still work even when user interacts with the slides
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img className="brand-img" src={brand.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
