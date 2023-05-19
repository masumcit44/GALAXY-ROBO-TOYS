import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCards, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './Brand.css'
// import required modules


const Brand = () => {

    const [brands,setBrands] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBrands(data)
        })
    },[])

    console.log();
  return (
    <div className="my-5">
        <h2 className="text-center text-5xl my-2 nav-design">Our Brands</h2>
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
