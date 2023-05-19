import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import GalleryCard from "../GalleryCard/GalleryCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch("http://localhost:5000/catagoryrobo")
      .then((res) => {
        toast.info("Loading toys...", { autoClose: 1000 });
        return res.json();
      })
      .then((data) => {
        setGallery(data);
      });
  }, []);
  return (
    <div
      
      className="nav-design my-4  "
    >
      <h2 className="text-center md:text-6xl mb-2">
        Our <span className="text-orange-500">ROBO</span> Gallery
      </h2>
      <div className="grid robo-gallery  md:grid-cols-3 gap-2 items-center">
        {gallery.map((card) => (
          <GalleryCard key={card._id} gallery={card}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
