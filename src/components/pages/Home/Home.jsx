import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className=' max-w-6xl  mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;