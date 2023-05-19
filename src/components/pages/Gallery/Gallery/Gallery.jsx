import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

import './Gallery.css'
const Gallery = () => {
    const [gallery,setGallery] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagoryrobo')
        .then(res=>res.json())
        .then(data=>{
            setGallery(data)
        })
    },[])
    return (
        <div className='nav-design my-4 robo-gallery'>
            <h2 className='text-center text-6xl mb-2'>Our <span className='text-orange-500'>ROBO</span> Gallery</h2>
            <div className='grid grid-cols-3 gap-2 items-center'>
                {
                    gallery.map(card=><GalleryCard
                    key={card._id}
                    gallery={card}
                    ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;