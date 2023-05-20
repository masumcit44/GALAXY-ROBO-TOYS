import React from "react";
import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import './ActionCard.css'
const ActionCard = ({ card }) => {
  const { _id, image, name, price, rating } = card;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleNotLogin = () => {
    Swal.fire({
      title: "please login!",
      text: 'You have to log in first to view details',
    });
    navigate('/login')
  };

  return (
    <div className="card  card-container rounded-lg border-2 border-black ">
      <figure>
        <img className="h-80 action-img md:w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body simple-text rounded-xl bg-purple-100">
        <h2 className="card-title">{name}</h2>
        <p className="text-base">Price: {price} </p>
        <div className="flex  text-base items-center">
          {" "}
          <p className="flex-grow-0">Rating:</p>{" "}
          <Rating disabled style={{ maxWidth: 150 }} value={rating} readOnly />{" "}
        </div>
        <div className="card-actions justify-end">
          {user ? (
            <Link to={`/toydetails/${_id}`}>
              <button className="btn btn-error">View Details button</button>
            </Link>
          ) : (
            <button onClick={handleNotLogin} className="btn btn-primary">
              View Details button
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
