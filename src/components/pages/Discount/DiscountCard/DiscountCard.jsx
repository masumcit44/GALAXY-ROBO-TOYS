import React from "react";
import './DiscountCard.css'
const DiscountCard = ({ card }) => {
  const { category, name, price, discount, discountedPrice , image } = card;
  return (
    <div className=" img-container  border-2 border-green-950  bg-base-100 ">

        <img
          src={image}
          alt="Shoes"
          className="discount-img mx-auto"
        />
        <p className="bg-red-600 text-amber-100 discount-price rounded-sm p-2">  -{discount}</p>
      <div className="card-body p-2 mb-0 simple-text items-center text-center">
        <h2 className="card-title">Product name : {name}</h2>
        <p>Category : {category}</p>
        <p className="text-xl">price: <span className="line-through text-red-600 line-thick">{price}</span> <span>{discountedPrice}</span></p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
