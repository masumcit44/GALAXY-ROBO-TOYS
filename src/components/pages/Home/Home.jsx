import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brands/Brand';
import Gallery from '../Gallery/Gallery';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';

const Home = () => {
    return (
        <div className=' max-w-6xl  mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCatagory></ShopByCatagory>
            <Brand></Brand>
        </div>
    );
};

export default Home;