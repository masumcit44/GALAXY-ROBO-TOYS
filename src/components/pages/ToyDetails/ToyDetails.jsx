import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
const ToyDetails = () => {
  const id = useParams().id;
  const [toy, setToy] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  }, []);

  const {
    image,
    name,
    price,
    rating,
    quantity,
    details,
    sellerName,
    sellerEmail,
  } = toy;

  return (
    <div className="hero min-h-screen bg-base-200 simple-text">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-amber-500 nav-design">
            {name}
          </h1>
          <h3 className="text-2xl ">seller name : {sellerName}</h3>
          <h3 className="text-2xl ">email : {sellerEmail}</h3>
          <div className="text-xl flex flex-col gap-2 ">
            <p className="">
              price :<span className="text-3xl text-red-600">${price}</span>
            </p>
            <div className="flex items-center">
              <p>
              rating :{" "}
              </p>
              <Rating
                disabled
                style={{ maxWidth: 150 }}
                value={rating}
                readOnly
              />{" "}
            </div>
            <p>
              <span className="text-3xl">available quantity</span> :{" "}
              <span className="text-3xl text-red-600">{quantity}</span>
            </p>
            <p className="text-base bg-amber-100 p-5">{details}</p>
          </div>
          <button className="btn btn-primary my-2">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
