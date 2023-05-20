import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brands/Brand";
import Discount from "../Discount/Discount";
import Gallery from "../Gallery/Gallery/Gallery";
import ShopByCatagory from "../ShopByCatagory/Container/ShopByCatagory";

const Home = () => {
  return (
      <div className=" max-w-6xl mx-auto ">
        <Banner></Banner>
        <Gallery></Gallery>
        <ShopByCatagory></ShopByCatagory>
        <Discount></Discount>
        <Brand></Brand>
      </div>

  );
};

export default Home;
