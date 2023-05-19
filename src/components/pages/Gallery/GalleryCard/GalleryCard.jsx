import React, { useEffect } from "react";
import "./GalleryCard.css";
import Gallery from "react-photo-gallery";
import AOS from "aos";
import "aos/dist/aos.css";
const GalleryCard = ({ gallery }) => {
  const { image, name } = gallery;

  const photos = [
    {
      src: image,
      alt: name,
      width: 4,
      height: 3,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="bg-base-100 gallery-card border border-gray-950 border-2 rounded"
    >
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryCard;
