import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const ActionCard = ({ card }) => {
  const { _id, image, name, price, rating } = card;
  const {user} = useContext(AuthContext)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>price: {price} </p>
        <p>rating: {rating} </p>
        <div className="card-actions justify-end">
          <Link to="/toydetails">
            <button className="btn btn-primary">View Details button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
