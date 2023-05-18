import React from "react";
import './GalleryCard.css'
import Gallery from "react-photo-gallery";
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

  return (
    <div className="bg-base-100 gallery-card border border-gray-950 border-2 rounded">
      <Gallery photos={photos} />
    </div>
  );
};


export default GalleryCard;
